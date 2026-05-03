<img src='' />

```javascript
// ================== CLOSURE ================

const { arrayBuffer } = require("stream/consumers")

function callMe() {
	const call = "Hi, I am here"
	setTimeout(function () {
		console.log(call)
	}, 4000)
}
callMe()

function callMe2() {
	setTimeout(function () {
		console.log(call)
	}, 4000)
	const call = "Hi, I am here"
}
callMe2()

// Hi, I am here (after 4s)
// Both will give same result because of closure, even though const is not hoisted
```

```javascript
// Benefits of Closure
// 1. Memory Efficient

function heavyDuty(index) {
	const bigArr = new Array(7000).fill("x")
	console.log(">>created!")
	return bigArr[index]
}

heavyDuty(688)
heavyDuty(468)
heavyDuty(968)

function heavyDuty2() {
	const bigArr = new Array(7000).fill("x")
	console.log(">>created!")
	return function (index) {
		return bigArr[index]
	}
}
const getHeavyDuty = heavyDuty2()
getHeavyDuty(688)
getHeavyDuty(468)
getHeavyDuty(968)

// This creates the array once and remembers it
```

```javascript
// ================== PROTOTYPAL INHERITANCE ================

// **proto** gives value of parent or goes one step up

const a = []
a.__proto__ // Gives a huge array
a.__proto__.__proto__ // Gives a huge object

const dragon = {
	name: "Tanya",
	fire: true,
	fight() {
		return 5
	},
	sing() {
		if (this.fire) {
			return `Hi, I'm ${this.name}, the breather of fire `
		}
	},
}

const lizard = {
	name: "Kiki",
	fight() {
		return 1
	},
}

const singLizard = dragon.sing.bind(lizard)
console.log(singLizard()) //undefined as lizard doesnt have fire property

lizard.__proto__ = dragon // This makes lizard inherit all properties of dragon
const singLizard2 = dragon.sing.bind(lizard)
console.log(singLizard2()) //Hi, I'm Kiki, the breather of fire

console.log(lizard.isPrototypeOf(dragon)) //false
console.log(dragon.isPrototypeOf(lizard)) //true -> as prototype is the parent object and dragon is prototype here

for (let prop in lizard) {
	console.log(">>all props", prop)
	if (lizard.hasOwnProperty(prop)) {
		console.log(">>original props", prop)
	}
}
```

```javascript
// IMPORTANT
// 1. how to create prototype
const human = {
	mortal: true,
}
const person = Object.create(human)
person.age = 25

human.isPrototypeOf(person) //true

// 2.
typeof Object // function
typeof Object.prototype // object

// Exp 1
// Date object => to have a new method lastYear() which shows you last year "YYYY" format
Date.prototype.lastYear = function () {
	return this.getFullYear() - 1
}

console.log(new Date().lastYear())

// Exp 2
// Modify .map to print "🗺️" at the end of each item
Array.prototype.map = function () {
	let arr = []
	for (let i = 0; i < this.length; i++) {
		arr.push(this[i] + "🗺️")
	}
	return arr
}

console.log([1, 2, 3].map())
```
