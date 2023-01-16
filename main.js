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

// var myCountry = ['Dhaka ', 'Barishal', 'Khulna', 'Rangpur'];

// for(let myCity of myCountry){
//     console.log(myCity);
// }

//..........................................
// Object for Js ES6
// protita jinis ei object jemon manus ekta object, computer ekta object, phone ekta object
// protita object er onek propati thakte pare aber oi propati er onek propati thakte pare tokhon oi propati ke object hisabe dhore thake
// jemon mune Object hole moanus er hat, pa, nak, kan, sob holo Manush object er propaty. ekoi vabe hat ke jodi amra object hisabe dhori taile hat er angul holo propati , hater color holo propaty, aber hater angul ke jodi amra object hisabe
// dhori taile angul er nok ekta prpaty noker color ekta propaty
// taile amara bolte pari je ekta object er vitore onek propati thake and oi propatike jodi apni object hisabe colpona koren taile tar vitore aro onek propaty thake ei vabe nestate hoye thake
// niche amra exam soho dekhbo object and tar propati and nestate

// var human = {
//     hane: {
//         color: 'white',
//         Quality: 'Nice',
//         person: 'Girl',
//         fingar: {
//             color: 'White',
//             fingarSize: 'big',
//         },
//         count: '2 Hand',
//         handProblem: false,
//     },
//     kidneys: {
//         kidneyCount: '2',
//         goodKidney: true,
//     },
//     heart: '1 heart',

// }
// console.log(human['hane']['color']);
// console.log(human['hane']);
// var ok = human['hane']['fingar'];
// console.log(ok['color']);

// var uname = 'Anil';
// var udivision = 'First';

// let user = {
//     uname,
//     udivision
// };
// console.log(user);

//............................................
// for in loop with Object 

// let laptop = [
//    { Monitor:{
//         color: 'Balack',
//         size: '23.8 in',
//         quality: 'Good',
//     },
//     brand: 'HP',
//     ownar: 'Zillur',
//     mobile:{
//         color: 'green',
//         size: '6 in',
//     }
// },
// { Monitor:{
//     color: 'white',
//     size: '23.8 in',
//     quality: 'best',
// },
// brand: 'Apple',
// ownar: 'Hidoy',
// mobile:{
//     color: 'Black',
//     size: '6 in',
// }
// }
// ];

// let eee = {
//     product: laptop
// }

// // for(let con in laptop){  
// //     console.log(laptop[con]['Monitor']['color']);  
// // }


// for(let item in eee['product']){  
//     console.log( eee['product'] [item]['Monitor']['quality']);  
// }

// console.log(eee);

/////////////

// let company = [{
//     team: {
//         dev: {
//             employe: [{
//                     names: 'Sohag',
//                     subject: 'Server Testing '
//                 },
//                 {
//                     names: 'Baky',
//                     subject: 'Apps Testing'
//                 },
//                 {
//                     names: 'Aslam',
//                     subject: 'Api Testing'
//                 }

//             ],

//         },
//         apps: {

//             employe: [{
//                     names: 'Zillur Rahman ',
//                     subject: 'Api and UI'
//                 },
//                 {
//                     names: 'Habib ',
//                     subject: 'iso'
//                 },
//                 {
//                     names: 'Hidoy',
//                     names: 'Api and UI',
//                 }

//             ],

//         },

//     },



// },

// {
//     team: {
//         dev: {
//             employe: [{
//                     names: 'Sohag',
//                     subject: 'Server Testing '
//                 },
//                 {
//                     names: 'Baky',
//                     subject: 'Help Man'
//                 },
//                 {
//                     names: 'Aslam',
//                     subject: 'Api Testing'
//                 }

//             ],

//         },
//         apps: {

//             employe: [{
//                     names: 'Zillur Rahman ',
//                     subject: 'Api and UI'
//                 },
//                 {
//                     names: 'Habib ',
//                     subject: 'iso'
//                 },
//                 {
//                     names: 'Hidoy',
//                     names: 'Api and UI',
//                 }

//             ],

//         },

//     },



// }


// ]

    // for(let i in company){
    //     const index = company[i]['team']['dev']['employe'].map(function(e){return e.names;}).indexOf('Baky');
    //     console.log(company[i]['team']['dev']['employe'][index]['subject']);
    //     // console.log(index)

    // }

    //   for(let i in company){
    //    // const index = company[i]['team']['dev']['employe'].map(function(e){return e.names;});
    //    const gg = company[i]['team']['apps']['employe'].map(function(k) {return k.names+1});
    //    //console.log(gg);
    //     // console.log(index)
        
    //     for (let value of gg) {
    //         // value += 1;
    //         console.log(value);
    //       }

    // }

//................................................................

// ES6 Decision Making

//   var data = { dev: {
//                 employe: [{
//                         names: 'Sohag',
//                         subject: 'Server Testing '
//                     },
//                     {
//                         names: 'Baky',
//                         subject: 'Help Man'
//                     },
//                     {
//                         names: 'Aslam',
//                         subject: 'Api Testing'
//                     }
    
//                 ],
    
//             }
//         }

// ........................................
// * Function //
//......................................
// Simple Function :
// function myAdd(){
//     const x = 20;
//     var y = 30;
//     let sum = x+y;
//     console.log(sum);

// }
// myAdd();

//..............................................

// Parameterzed function

// function myName(name, city){
//     var address = city + ' ' +name;
//     console.log(address);

// }

// myName("Zillur" , "Dhaka");

//.........................................

// Rest Parameter : eti emon ekti parameter jar madhome ek sathe onek parameter pathano jay
// eti lekhar niyom holo (...data) 3 dort dite hoy.

// function x(...data){

// }
// x(1,6,20,45, 'a')

// function myData(...x){
//     console.log(x);

// }
// myData(1,5,80, 'efrkgtjksd')

///..............................
// Anonymous Function: advantage
// 1. Afunction without a name 
// 2. It can be declared dynamically at runtime 
// // 3. An anonymous function can be assigend within a variable

// let myCity = ['Dhaka', 'Barishal', 'Kashipur'];
// let youCity = [...myCity, 'Khulna', 'Rongpur']
// // console.log(youCity);

// var myFun = function(youCity, ...x){

// console.log(x  [0]+ '  ' + youCity);
// }
//  myFun( youCity, 100+ ' ', 50+ ' ', 60+ '',);

///......................................................
// ES6 Arrow Function :
// 1. To write smaller function syntax 
// 2. Arrow function make your code more readable and structured 
// 3. Arrrow function are anonymous function 
// 4. Can declare without the function keyword 
// 5. problme : Arrow functions cannot be used as the constructore
 
// var myArrow = () => {
//     return 'This function is Arrow function'
   
// }

// console.log(myArrow());
//..................................................

let arr = [25,12,50, 4];
let swap; 

for(let i = 0; i< arr.length ; i++){
    for(let j = i+1; j<arr.length; j++){
        if(arr[i] > arr[j]){
            swap = arr[i];
            arr[i] = arr[j];
            arr[j] = swap;
        }

    }
}
console.log(arr);




