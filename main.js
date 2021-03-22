// Variables: var, let, const
// Var is globally scoped. Don't use.

// ES6 let, const
// 'let' allow reassign value.
// 'const' can't be changed. 

/* 
let age = 30;
age = 31;
console.log(age);
*/

/*
const score = 10;
*/


/*
//This does not work.
const score;
score = 10;
*/

// Data Types
// String, Numbers, Boolean, null, undefined
// const name = 'John'; //Double quote or single quote
// const age = 30; //Number
// const rating = 4.5; //Number 
// const isCool = true; //Boolean
// const x = null; //empty
// const y = undefined;
// let z;

// console.log(typeof rating); 


// Concatenation
// console.log('My name is ' + name + 'and I am' + age); // Old way of doing it.
// console.log(`My name is ${name} and I am ${age}`); //Template String, Backtick

// const s = 'Hello World';
// console.log(s.length); //Have parethesis is a method (), without is a property.
// console.log(s.toUpperCase()); 
// console.log(s.toLowerCase()); 
// console.log(s.substring(0,5); //Output: Hello
// console.log(s.substring(0,5).toUpperCase); //Output: HELLO
// console.log(s.split('')); //Split by every characters including space.

// Arrays
// const numbers = new Array(1,2,3,4,5); //Construct a array by using contructor.
// const fruits = ['apples', 'ornages', 'pears', 10 , true];
// console.log(fruits); // [...]
// console.log(fruits[0]); // apples
// fruits[3] = 'grapes'; // This will work with const.
// fruits.push('mango'); // Push a value to the end of the array;
// fruits.unshift('strawberries'); // Push into the first one.
// fruits.pop(); // Takes the last one off.
// console.log(Array.isArray(fruits)); // Check if is array "true or false".
// console.log(Array.indexOf('oranges)); // output 2

// Object literals, Key object pair
// const person = {
//      firstName: 'John',
//      lastName: 'Doe',
//      age: 30,
//      hobbiest: ['music', 'movies', 'sports']
//      address: {                   //Embed object, Object within a object
//              street: '50 main st', 
//              city: 'Boston',
//              state: 'MA'
//        }
// }
// require "console.log(person);" to output all information.
// console.log(person.hobbist[1]); //Output movies
// console.log(person.address.city); //Output Boston

// const { firstName, lastName, address:{ city } } = person; //Destructure, pulling things out. 
// console.log(firstName); //John
