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

// const { firstName, lastName, address:{ city } } = person; //Destructuring, pulling things out. 
// console.log(firstName); //John
// console.log(city); //Bosto

// person.email = 'john.gmail.com';  //Email added to person
// console.log(person); 

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    }, 
    {
        id: 2,
        text: 'Metting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

//console.log(todaos[1].text); //Output: meeting with boss.

//const todoJSON = JSON.stringify(todos);  //Make it JSON format
//console.log(todoJSON);

// LOOPS
// for
// for(let i = 0; i < 10; i++){
//     console.log(`For Loop Number: ${i}`);
// }

// while
// let i = 0;
// while( i < 10) {
//     console.log(`While Loop Number: ${i}`)
//     i++;
// }

// For loop array
// for(let i = 0; i < todos.length; i++) {
//     console.log(todo[i].text);
// }

// For of loop
// for(let singleTodo of todos) {
//    console.log(todo[i].text);
//}

// forEach, map, filter

// todos.forEach(function(singleTodo){   //For each todo output todo.text
//     console.log(todo.text);
// });

// todos.map(function(singleTodo){
//   return todo.text;
// });      // Loop and return a array of just the text values.
// console.log(todoText); 

// const todoCompleted = todos.filter(function(singleTodo){
//    return singleTodo.isCompleted === true;       
// });
// console.log(todoCompleted); //Output: 2 array object isCompleted is set to true

// const todoCompleted = todos.filter(function(singleTodo){
//    return singleTodo.isCompleted === true;       
// }).map(function(singleTodo){
//     return todos.text;
// });

//console.log(todoCompleted); //Output: 2 array object text isCompleted is set to true 


// Conditions
// const x = 10;

// if (x == 10) {    // x === match data type. x === 10
//     console.log('x is 10');
// }

// if (x === 10) {   
//     console.log('x is 10');
// } else if(x > 10) {
//    console.log('x is NOT 10')
// } else {
//    console.log('x is less than 10');
// }

// const y = 10;
// if (x > 5 || y > 10) {    // one or the other have to be true
//     console.log('x is more than 5 or y is more than 10');
// }
// if (x > 5 && y > 10) {    // both have to be true
//     console.log('x is more than 5 or y is more than 10');
// }

// const x = 10;
// ? turnery operater = then
// : else
// const color = x > 10 ? 'red' : 'blue';

// switch (color) {
//   case 'red':
//      console.log('color is red');
//      break;
//   case 'blue':
//      console.log('color is blue);
//      break;
//   default:
//      console.log('color is not red or blue);
// }


// Function
// function addNums(num1 = 1, num2 = 1){ //With default values;
//    console.log(num1 + num2);
// }
//
// addNums(5, 5);

// function addNums(num1 = 1, num2 = 1){ //With default values;
//    return num1 + num2;
// }
//
// console.log(addNums(5, 5));

// Arrow Function
// const addNums = (num1 = 1, num2 = 1) => {
//      return num1 + num2;
// }
//
// console.log(addNums(5, 5));

// const addNums = (num1 = 1, num2 = 1) => console.log(num1 + num2);
//
// addNums(5, 5);

// const addNums = (num1 = 1, num2 = 1) => num1 + num2; //Return num1 + num2;
//
// console.log(addNums(5, 5));

// const addNums = num1 => num1 + 5;        //One parameter, parathanese not needed.
//
// addNums(5);

// todos.forEach((singleTodo) => console.log(todo));

// Object
// function Person(firstName, lastName, dob) {  //constructor function
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);  //Built in date object
//     this.getBirthYear = function() { //Method
//       return this.dob.getfFullYear();
//     }
//     this.getFullName = function() {
//          return `${this.firstName} ${this.lastName}`;
//     }
// }
// Constructor function start with capital letter.

// Instantiate object
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '4-4-1940');
// console.log(person1);
// console.log(person2.dob.getFullYear());
// console.log(person1.getBirthYear());


// Prototype: so you dont use or console log object method everytime
// function Person(firstName, lastName, dob) {  //constructor function
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);  //Built in date object
// }
// Person.prototype.getBirthYear = function() {
//     return this.dob.getfFullYear();
// }
//
// Person.prototype.getFullName = function() {
//      return `${this.firstName} ${this.lastName}`;
// }
// const person1 = new Person('John', 'Doe', '4-3-1980');
// console.log(person1.getBirthYear());


// Classes : Prettier way to write it
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear(){
//         return this.dob.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 = new Person('John', 'Doe', '4-3-1980');
// console.log(person1.getBirthYear());

// DOM 
// console.log(window);
// window.alert(1); //Window top level default object.
// window.document; //mekes up the dom

// single element selector
// document.getElementBy('htmlID');
// document.querySelector('htmlID'); //Grab first of anything (h1, #id, .class)

// mutiple element selector
// document.querySelectorAll('.htmlClass'); //Grab all (h1, #id, .class)
// console.log(getElementByClassName('htmlClass');

// element loop
// const items = document.querySelectorAll('.htmlClass');
// items.forEach((item) => console.log(item));

// Manipulate DOM
// const ul = document.querySelector('.items');
// ul.remove();     //remove ul element
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';  //Change text conent of first ul element.
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h4>Hello</h4>'; //Put change tag within.

// const btn = document.querySelector('.btn');
// btn.style.background = 'red'; //Change color of a button

// EVENTS
// const btn = document.querySelector('.btn');
// btn.addEventListener('click',  (event) => 
//      {console.log('click'); }); //When a button is clicked run a function and create event object.


// const btn = document.querySelector('.btn');
// When a button is clicked run a function.
// btn.addEventListener('click',  (event) =>     
//      {   
//          event.preventDefault();    //Prevent Default Behavior 
//          console.log('click'); 
//      }); 


// const btn = document.querySelector('.btn');
// btn.addEventListener('click',  (event) => 
//      {   event.preventDefault();
//          document.querySelector('#my-form).style.background = '#ccc'; //Change color of the form element 
//          document.querySelector('body').classList.add('bg-dark');
//          document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
//  });


// TINY PROJECT: DOM Manipulate
// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error'); //Add html 'error' class.
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

