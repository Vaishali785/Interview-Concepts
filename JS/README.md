# 1. Basics Of JS (advance)

<pre>
    1. typeof null = "object"
    2. typeof "hello" = "string"  //with small s
    3. typeof 123= "number" // with small n 
    4. typeof Number = "function"
    5. typeof Function = "function"
    6. typeof myFunc = "function" // ; myFunc = function(){}
    7. typeof NaN = "number" 
    8. typeof Number("123abc") = "number" // Number("123abc") = NaN
    9. Number(true) = 1
    10. Number("") = 0 // " "=false
</pre>

<pre>    
    while in conversion capitalize ones are used , e.g.
    String(123) = "123"
    Number("123") = 123
</pre>

<pre>    
    console.log("1" + 2 + 2 ) ==> 122
    console.log(1 + 2 + "2" ) ==> 32
    console.log(+true) ==> 1
    console.log(true+) ==> error - unexpected token
    console.log(+"") ==> 0
</pre>

Comparison vs equality operators :- Comparison operators convert string to numbers, while equality operator doesn't.

<pre>    
    console.log("2" > 1  ) ==> true
    
    console.log(null > 0  ) ==> false // 0 > 0 , as null is converted to 0 
    console.log(null == 0  ) ==> false // null == 0
    console.log(null >= 0  ) ==> true // 0 >= 0
    
    console.log(undefined >= 0  ) ==> false //  undefined is always undefined, it is not converted
    console.log(undefined >= 0  ) ==> false // 
    console.log(undefined >= 0  ) ==> false // 
</pre>

# 2. Customized Date

toLocalString() method also takes an option object to customize dates, calendars, time.

<pre>
    const myDate = new Date();
    myDate.toLocaleString("en-US",{
        dateStyle: "long",timeStyle: "short"
    })
</pre>

# 3. Arrays

a.) myArr.flat(depth)

- where depth represents depth of array it will flat.
- Returns a new array.
- depth = Infinity is not preferred but can be used.
<pre>
    const myArr = [1,2,[3,4],[5,6,[7,8,9]]];
    myArr.flat(Infinity);
</pre>

b.) Array.isArray(item)

- This checks if the "item" is an array or not.
<pre>
    Array.isArray("Vaishali") //false
</pre>

c.) Array.from(item)

- Creates an array from item
- item can be anything strings, objects etc.
- But in any case if it can't create an array, it will return an empty array ([]).
  <pre>
      Array.from("Vaishali")  // ["V","a","i","s","h","a","l","i"]
      Array.from
  </pre>

d.) Array.of(item1,items2)

- Creates array from set of elements.
<pre>
    const score1=100
    const score2=200
    const score3=300
    Array.from(score1,score2,score3) // [100,200,300]
</pre>

# 4. Objects

- Two ways to create an object:<br>
  a.) Singleton - using constructor like const obj = new Object()<br>
  b.) Object Literal - const obj = {}<br>

- Merge Objects<br>
    a.) Object.assign(item1, item2 , item3) - Merges all items in item1 - To create a new object - Object.assign({},item1,item2,item3)
    <br>
    b.) Spread Operator - const obj3 = {...obj1,...obj2}

# 5. this

- Global<br>
    - browser - Window object<br>
    - node - {}<br>
- Inside a function<br>
    - function(){} - long object<br>
    - ()=>{} - {}<br>

# 6. IIFE

a.) named
    <pre>
        (function func(){console.log("hey there")})()
    </pre>

b.) arrow
    <pre>
        ((name)=> {console.log(`hey there ${name}`)})(name)
    </pre>
Note: semi-colon is required in the end while writing two iife together.
<pre>
    <!-- won't work -->
    (function func(){console.log("hey there")})()
    ((name)=> {console.log(`hey there ${name}`)})(name)
    
    <!-- working -->
    (function func(){console.log("hey there")})();
    ((name)=> {console.log(`hey there ${name}`)})(name)
</pre>

# 7. How does JS execute code + call stack

Whenever we write some code, JS performs three steps: <br> 
1. Creates a Global Execution (or Environment), and this is allocated to 'this' <br>
2. Memory Creation Phase ---> creates all variables and assign undefined to them, and for function variables its definition is assigned.<br>
3. Execution Phase -----> assigns actual value to the variables

<pre>
    const val1 = 4;
    const val2 = 5;
    function sum(num1,num2){ let total =num1 + num2; return total};
    var result1 = sum(val1,val2);
    var result2  = sum(10,12);

<!-- Explanation -->

1. Global Context created
2. Memory Phase --> val1 = undefined
                    val2 = undefined
                    sum = definition
                    result1 = undefined
                    result2 = undefined
3. Execution Phase ---> val1 = 4
                        val2 = 5
                        no execution as the function is not called yet.                                                _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                        result1 ---------->   new executional context      ----->   new variable environment  ------> | memory phase - num1 = undefined         |
                                            (this new context executes the             + execution thread             |                num2 = undefined         |
                                            memory and execution phase                                                |                 total = undefined       |
                                            again for this new context)                                               |                                         |
                                                                                                                      |                                         |
                                                                                                                      | execution phase  - num1  = 4            |
                                                                                                                      |                    num2 = 5             |
                                                                                                                      |                    total = 4+5 = 9      |
                                                                                                                      |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _|
                        result1 = 9                                                                                 (This gets deleted auto when it's work is done)

                                                                                                                       _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                        result2 = -------->   new executional context      ----->   new variable environment  ------> | memory phase - num1 = undefined         |
                                            (this new context executes the             + execution thread             |                num2 = undefined         |
                                            memory and execution phase                                                |                 total = undefined       |
                                            again for this new context)                                               |                                         |
                                                                                                                      |                                         |
                                                                                                                      | execution phase  - num1  = 10           |
                                                                                                                      |                    num2 = 12            |
                                                                                                                      |                    total = 10+12=22     |
                                                                                                                      |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _|
                        result2 = 22                                                                                 (This gets deleted auto when it's work is done)
</pre>

# 8. Loops

a.) for-of loop ---> works for arrays only , error for objects <br>
b.) for-in loop ----> works both with arrays and by default returns keys of objects as well as arrays.<br>
c.) forEach ----> this is a built in property / method of array but it doesn't return anything.<br>

<pre>
    const myArr = [1,2,3,4,5]
    const newArr = myArr.forEach(item=> {
        console.log(item+1);    // this will work
        return item+1;
    })
    console.log(newArr); // undefined
</pre>

# 9. Regular vs Arrow Functions

1. this binding

- Regular functions have their own dynamic this binding, while arrow functions do not have their own this.
- The value of this inside a regular function depends on how the function is invoked.
- During a simple invocation the value of this equals to the global object(or undefined if the function runs in strict mode)
    <pre>
    function fun() {
        console.log(this);
    }
    fun(); // prints global object (window) 
    </pre>
- During a method invocation the value of this is the object owning the method:
  <pre>
      const obj = {
          fun() {
              console.log(this);
          }
      };
      obj.fun(); // prints obj 
      </pre>
- The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non - arrow parent function.
        <pre>
        In the following example, fun1() is an outer regular function of fun2() arrow function:
            const obj = {
                fun1(items) {
                    console.log(this); // prints obj
                    const fun2 = () => {
                        console.log(this); // prints obj
                    };
                    fun2()
                }
            };
        obj.fun1();

      // this value inside the arrow function fun2() equals to this value of the outer function fun1(). -->
    </pre>

2. arguments object

- Inside the body of a regular function, arguments is a special array - like object containing the list of arguments with which the function has been invoked.
- No arguments object is defined inside an arrow function.
- The arguments object is resolved lexically: the arrow function accesses arguments from the closest outer non - arrow function.

    <pre>
    function fun() {
    console.log(arguments);
    }
    myFunction('a', 'b'); // prints { 0: 'a', 1: 'b'}
    </pre>
    
    <pre>
    function fun1() {
        const fun2 = () => {
            console.log(arguments);
        }
    
        fun2('c', 'd');
    }
    
    fun1('a', 'b'); // prints { 0: 'a', 1: 'b' }
    </pre>

3. new keyword

- Regular functions created using function declarations or expressions are constructible(means that we can use regular functions as constructors) and callable.And since regular functions are constructible, they can be called using the new keyword.
- The arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions.Hence, they can never be called with the new keyword.

    <pre>
    function fun() {
        console.log("hello");
    }
    const obj = new fun(); //valid code
     
    -------------------
    
    let fun = () => {
        console.log("hello);
    }
    
    const obj = new fun(): // Gives error
    </pre>
    
    <pre>
    Find the output for the given code below.
    
    let obj = {
    a: 100,
    fun1() {
    let a = 20;
    let fun2 = () => {
    console.log(this.a); // 100
    }
    fun2();
    }
    }
    
    obj.fun1(); 
    </pre>
    
# 10. Bind vs Call vs Apply

- The bind method creates a new function and sets the this keyword to the specified object.
- The call method sets the this inside the function and immediately executes that function.
- The apply() method is similar to call(). The difference is that the apply() method accepts an array of arguments instead of comma separated values.

    <pre>
    <!-- Default Case -->
    const person = {
      firstName: 'John',
      lastName: 'Doe',
      printName: function() {
        console.log(this.firstName + ' ' + this.lastName);
      }
    };
    
    1.
    person.printName(); // John Doe
    
    2.
    const printFullName = person.printName;
    printFullName(); // undefined undefined 
    
    </pre>

1. Bind
    <pre>
    const john = {
      name: 'John',
      age: 24,
    };
    const jane = {
      name: 'Jane',
      age: 22,
    };
    function greeting() {
      console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
    }
    
    1.)
    const greetingJohn = greeting.bind(john);
    greetingJohn(); // Hi, I am John and I am 24 years old
    const greetingJane = greeting.bind(jane);
    greetingJane(); // Hi, I am Jane and I am 22 years old
    
    2.) With args
    
    function greeting(lang) {
    console.log(`${lang}: Hi, I am ${this.name} and I am ${this.age} years old`);
    }
    
    const greetingJohn = greeting.bind(john, 'en');
    greetingJohn();
    const greetingJane = greeting.bind(jane, 'es');
    greetingJane();
    
    </pre>

2. Call
    <pre>
    function greeting() {
      console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
    }
    const john = {
      name: 'John',
      age: 24,
    };
    const jane = {
      name: 'Jane',
      age: 22,
    };
    greeting.call(john); // Hi, I am John and I am 24 years old
    greeting.call(jane); // Hi, I am Jane and I am 22 years old
    
    <!-- with args  -->
    
    function greet(greeting) {
    console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
    }
    greet.call(john, 'Hi'); // Hi, I am John and I am 24 years old
    greet.call(jane, 'Hello'); // Hi, I am Jane and I am 22 years old
    
    </pre>

3. Apply
    <pre>
    function greet(greeting, lang) {
      console.log(lang);
      console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
    }
    const john = {
      name: 'John',
      age: 24,
    };
    const jane = {
      name: 'Jane',
      age: 22,
    };
    greet.apply(john, ['Hi', 'en']); // Hi, I am John and I am 24 years old
    greet.apply(jane, ['Hola', 'es']); // Hi, I am Jane and I am 22 years old
    </pre>

# 11. Deep vs Shallow Copy

- Copy means to create another instance similar to prev one, changing the new instance wont change the original one.
- Shallow copy is a copy of an object whose properties share the same references as of the source object.
- Deep copy is a copy of an object whose properties don't share the same references as of the source object.

### With primitive data types, it is fine

Exp:
const a = 5
let b = a // this is the copy
b = 6
console.log(b) // 6
console.log(a) // 5

### With objects

<pre>
const a = {
  en: 'Hello',
  de: 'Hallo',
  es: 'Hola',
  pt: 'Olà'
}
let b = a
b.pt = 'Oi'
console.log(b.pt) // Oi
console.log(a.pt) // Oi
</pre>
<p>This is a shallow copy - original value is also changed.</p>

<ol>
    <li> Spread operator 
        <pre>
            const a = {
              en: 'Bye',
              de: 'Tschüss'
            }
            let b = {...a}
            b.de = 'Ciao'
            console.log(b.de) // Ciao
            console.log(a.de) // Tschüss
        </pre>
    </li>
    
<li> 
Object.assign - Used before spread operator <br>
    <strong> 
        Note :-  the first argument in the Object.assign() method actually gets modified and returned. So make sure that you pass the object to copy at least as the second argument. Normally, you would just pass an empty object as the first argument to prevent modifying any existing data.             
    </strong>
        
<pre>
    const a = {
        en: 'Bye',
        de: 'Tschüss'
    }
    let b = Object.assign({}, a)
    b.de = 'Ciao'
    console.log(b.de) // Ciao
    console.log(a.de) // Tschüss
</pre>
</li>
</ol>

<hr>

<h3> Pitfall of both methods:</h3> 
<p>Creates shallow copy if the object is nested .</p>

<pre>
const a = {
  foods: {
    dinner: 'Pasta'
  }
}
let b = {...a}
b.foods.dinner = 'Soup' // changes for both objects
console.log(b.foods.dinner) // Soup
console.log(a.foods.dinner) // Soup
</pre>

<h3>  To create deep copy of nested objects </h3>

<ol>
<li> Using spread operator </li>
<pre>
const a = {
  foods: {
    dinner: 'Pasta'
  }
}
let b = {foods: {...a.foods}}
b.foods.dinner = 'Soup'
console.log(b.foods.dinner) // Soup
console.log(a.foods.dinner) // Pasta
</pre>
<strong>const b = {...a, foods: {...a.foods}} . </strong>

<li>Using JSON.stringify and JSON.parse </li>
<pre>
const a = {
  foods: {
    dinner: 'Pasta'
  }
}

let b = JSON.parse(JSON.stringify(a))
b.foods.dinner = 'Soup'
console.log(b.foods.dinner) // Soup
console.log(a.foods.dinner) // Pasta

</pre>

</ol>

<hr>

### Some extra methods for arrays - not for nested objects

<ul>
<li> Using map</li>
<pre>
const a = [1,2,3]
const b = a.map((el, index) => index === 1 ? 4 : el)
console.log(b[1]) // 4
console.log(a[1]) // 2
</pre>

<li>Using slice</li>
<pre>
const a = [1,2,3]
let b = a.slice(0)
b[1] = 4
console.log(b[1]) // 4
</pre>
</ul>
