// const obj = {
//     fun1() {
//         console.log(typeof this); // prints obj
//         const fun2 = () => {
//             console.log(this); // prints obj
//         };
//         fun2();
//     }
// };

// obj.fun1();

// --------------------------------------------------------------------------------------

// Find the output for the given code below.

// let obj = {
//     a: 100,
//     fun1() {
//         let a = 20;
//         let fun2 = () => {
//             console.log(this.a); // 100
//         }
//         fun2();
//     }
// }

// obj.fun1();

// --------------------------------------------------------------------------------------

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     printName: function () {
//         console.log(this.firstName + ' ' + this.lastName);
//     }
// };

// person.printName(); // John Doe

// const printFullName = person.printName;
// printFullName(); // undefined undefined

// Fix : person.printName.bind(person)

// const pOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Inside setTimeout");
//         const user = { name: "Vaishali", email: "v@gmail.com" };
//         if (user) {
//             resolve(user);
//         } else {
//             reject("Issue");
//         }
//     }, 1000);
// });

// pOne
//     .then((data) => {
//         console.log("Hey", data);
//         return data.name;
//     })
//     .then((username) => console.log(username))
//     .catch((err) => console.log("error", err))
//     .finally(() => console.log("Promise completed"))

async function getUsers() {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/users/")
		const data = await response.json()
		console.log(data)
	} catch (error) {
		console.log(error)
	}
}
// getUsers()

// const data = fetch('https://jsonplaceholder.typicode.com/users/')
//     .then(data => {
//         // console.log(data);
//         return data.json();
//     })
//     .then((users) => console.log("users", users))
//     .catch(error => console.log(error))

// console.log("data", data);

console.log("1")
setTimeout(() => {
	console.log("A")
	const p1 = new Promise((resolve) => resolve())
	p1.then(() => console.log("V"))
})

const p1 = new Promise((resolve) => resolve())

p1.then(() => {
	console.log("B")
	setTimeout(() => {
		console.log("C")
	})
})

console.log(2)

// Result:  12BAVC
