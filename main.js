// Strict Mode in js "use strict"

// MyName();
// function MyName(){
//   name = 'Zillur Rahman'
//  console.log(name)
// }
//.......................................
// Spread Operator in js 

// let poorCountry = ['BD', 'India'];
// let richCountry = [...poorCountry, 'USA', 'China'];
//  console.log(richCountry)

//.......................................
// with out Spread Operator concat Arry with push mathod  in js 
// Push Mathord 

// let poorCountry = ['BD', 'India'];
// let richCountry = [ 'USA', 'China'];
// richCountry.push(poorCountry)

//  console.log(richCountry)
//.......................................
// Rest Parameter (Rest parameter use korte hole (...) dote dite hoy )

// function Calculation( ...number){

// let  sum =0;
// for (let i of number ) {
//       sum =  sum + i;
// }

// console.log(sum); 
// }

// Calculation(20, 20,30);
//.......................................
// // Number sum korar progrmam  Outpur (190)
// function Calculation( number){

//     let  sum =0;
    
//     for (let index = 0; index < number; index++) {
//           sum =  sum + index;
      
//     }
//     console.log(sum); 
    
//     }
    
//     Calculation(20)

//.......................................

// Dynamic Function for Js 

// var userName =  function(...name){
//     return name;

// }
// console.log(userName('Tipu Sharif ' ,'Uzzal Sharif', 'Rokon Sharif'));

//.................................................

// Variable Scope 2 prokar: 
// 1. Global Scope: In the global scope, the variable can be accessed from any  part of the JavaScript code.
// 2. Local Scope : In the local scope, the variable can be accessed within a function where it is declared.


// var roll = 20; // Global Scope variable in js.
// function myName(){
// var personName = 'Zillur Vai'; // local scope variable
//  console.log(personName);
//  console.log(roll);

// }
// console.log('function er bahire ' + roll); 
// myName();

///.....................................................

// Variable Hosting for JavaScript: jodi valu age assign kora hoy pore jodi variable declare kora hoy taile Variable Hosgting bola hoy 

// name = 'Nahid';
// console.log(name);
// var name;

//......................................................

// For loop js 

// var i; // Iteration

// for(i = 0; i <= 100; i = i+20){
//     console.log('Allah');
// }

//...................................

// The for of loop 

var myCountry = ['Dhaka ', 'Barishal', 'Khulna', 'Rangpur'];

for(let myCity of myCountry){
    console.log(myCity);
}


