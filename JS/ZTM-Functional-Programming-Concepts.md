<img src='https://github.com/Vaishali785/Interview-Concepts/blob/main/JS/Advanced_Javascript.png' />

OOP and FP are both programming paradigms for both structuring data and organizing code.

## OOP

4 pillars of OOP are:-

1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism

## Functional Programming (FP)

Pillars of FP are:-

1. Pure functions
2. Immutability
3. Composition
4. Currying

**Note** :- Modern languages like JS and python are multi-paradigms , allowing developers to mix both styles based on the specific problem being solved.

---

---

## Pure Functions

1. **Cannot modify anything outside of itself (no side effects)**

<!-- Example of Side Effect -->

```javascript
const array = [1, 2, 3]
function arr(a) {
	arr.pop()
}
arr(array)
console.log(array) //[1,2]
```

<!-- Example of NO Side Effect -->

```javascript
const array = [1, 2, 3]
function arr(a) {
	const arrCopy = [...a]
	arrCopy.pop()
	return arrCopy
}
console.log(arr(array)) // [1,2] ----> ALthough value changed but its a local variable , nothing changed outside of the function

console.log(array) //[1,2,3]
```

<!-- is this pure or not -->

```javascript
    function a {
        console.log("hi")
    }

    // Output
    No its not , becoz console is window specific so it is affecting outside world.
```

2. **Functions return same output given the same input**

```javascript
function a(n1, n2) {
	return n1 + n2
}

a(3, 4) // always return 7

function b(num) {
	return num * 2
}

b(7) // 14
b(a(3, 4)) //14
```

## Idempotence

- Idempotent Functions are similar to pure functions as they are "convergent"—repeating the operation multiple times has the same final effect as doing it once. But they can change the outside world.
- Not all idempotent functions are pure. An operation that updates a database or deletes a user is idempotent but impure.

## Imperative vs Declarative

- Imperative code tells the computer what to do and how to do it.
- Declarative code tells the computer what to do and what should happen , not how to do it.

## Immutabilitity

Not changing the data

## Currying

Currying is a functional programming technique where a function that takes multiple arguments is transformed into a series of nested functions that each take a single argument.

- Instead of calling a function like f(a, b, c), currying allows you to call it as f(a)(b)(c).

Examples:-

```javascript
const multiply = (a, b) => a * b
multiply(3, 4) //12
multiply(3, 6) //18

const curriedMultiply = (a) => (b) => a * b
curriedMultiply(5)(3) //15

const multiplyBy5 = curriedMultiply(5)
multiplyBy5(4) //20
multiplyBy5(3) // 15
multiplyBy5(6) // 30
```

## Partial Application

In JavaScript, partial application is a functional programming technique where you take a function with multiple arguments and "pre-fill" some of them, creating a new function that takes the remaining arguments.

Two ways to apply this :

1. Using bind()

```javascript
function multiply(a, b) {
	return a * b
}
const double = multiply.bind(null, 2) // '2' is partially applied
console.log(double(5)) // 10
```

2. Using closures

```javascript
const multiply = (a, b) => a * b
const triple = (b) => multiply(3, b)
console.log(triple(5)) // 15
```

**Note:-** It is often confused with currying, but they differ in how they handle arguments

## Memoization

- Memoization ~~ Caching
- Caching is a way to store values so we can use them later
- Memoization is a different form of caching

Example:-

```javascript
let cache = {}
function memoizedFunc(n) {
	if (n in cache) {
		return cache[n]
	} else {
		console.log("Too long calculation below")
		cache[n] = n + 80
		return cache
	}
}

console.log(memoizedFunc(5)) // console log here
console.log(memoizedFunc(6)) // console log here
console.log(memoizedFunc(5)) // NO console log here
```

```javascript
// let cache = {} // Ideally we dont want to fill the cache in global scope so better way is to put it inside the function and use closure
function memoizedFunc() {
	let cache = {}
	return function (n) {
		if (n in cache) {
			return cache[n]
		} else {
			console.log("Too long calculation below")
			cache[n] = n + 80
			return cache
		}
	}
}

const memoized = memoizedFunc()

console.log(memoized(5)) // console log here
console.log(memoized(6)) // console log here
console.log(memoized(5)) // NO console log here
```

## Compose

- Any sort of data transformation that we do should be obvious
- Composability is a system design principle that deals with the relationship of components.
- Exp:- data1 ----> fn ----> data2 ----> fn

So if we have something like

```javascript
fn1(fn2(fn3(50)))

it can be written as
compose (fn1, fn2, fn3) (50) // compose goes from right to left , right fn executed first
pipe(fn3,fn2,fn1)(50) // pipe is opposite of compose, goes from left to right

// both gives same result
// btw these are not something that comes built-in in JS
```

```javascript
const compose = (f, g) => (data) => f(g(data))
const pipe = (f, g) => (data) => g(f(data))
const multiplyBy3 = (num) => num * 3
const absValue = (num) => Math.abs(num)
const multiplyBy3AndAbs = compose(multiplyBy3, absValue)(-50) //150
const multiplyBy3AndAbs2 = pipe(absValue, multiplyBy3)(-50) //150
```

## Arity

Number of arguments a function takes

## Practice

```javascript
/*
   Implement a cart feature:
     1. Add items to cart.
     2. Add 30% tax to item in cart.
     3. Buy item: cart --> purchases.
     4. Empty cart

   Bonus:
     Accept refunds.
     Track user history.
  */
const user = {
	name: "Kim",
	active: true,
	cart: [],
	purchases: [],
}

const compose =
	(f, g) =>
	(...args) =>
		f(g(...args))
const addItemToCart = (user, item) => {
	const updatedCart = user.cart.concat(item)
	const updatedUser = Object.assign({}, user, { cart: updatedCart })
	return updatedUser
}
const addTaxToPrice = (user) => {
	const { cart } = user
	const priceAfterTax = 1.3
	const newCart = cart.map((item) => ({ ...item, price: item * priceAfterTax }))
	const updatedUser = Object.assign({}, user, { cart: newCart })
	return updatedUser
}
const buyItem = (user) => {
	const cartItems = user.cart
	const updatedUser = Object.assign({}, user, { purchases: cartItems })
	return updatedUser
}
const emptyCart = (user, item) => {
	const updatedCart = user.cart.concat(item)
	const updatedUser = Object.assign({}, user, { cart: [] })
	return updatedUser
}

const purchaseItem = (...fns) => fns.reduce(compose)

const result = purchaseItem(
	emptyCart,
	buyItem,
	addTaxToPrice,
	addItemToCart,
)(user, { name: "Laptop", price: 2000 })

console.log(result)
```
