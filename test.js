// Hello world
// console.log("hello world")
// ----------------------------------------------------------------------------
// variables declaration
// there are 3 ways 
// var variable1 = 10;
// let variable2 = 10;
// const variable3 = 10;

// little difference b/t var & let,const 
// 1. var was introduced in ES5 2009 while let & const in ES6 2015. 
// 2. var is function scoped while let & const are blocked soped. 
// 3. var add itself to windows object while let & const don't. 
// ----------------------------------------------------------------------------
// string indexing

// let myString = "I am a string.";

// forward indexing

// console.log(myString[0]);
// console.log(myString[1]);
// console.log(myString[2]);
// console.log(myString[3]);

// reverse indexing

// console.log(myString[myString.length-1]);
// console.log(myString[myString.length-2]);
// console.log(myString[myString.length-3]);
// console.log(myString[myString.length-4]);

// ----------------------------------------------------------------------------
// useful string methods
// there are a few important useful methods.

// 1. string length

// let myString = "I am Pakistani.";
// console.log(myString.length);

// 2. typeof()

// let myString = "I am Pakistani.";
// console.log(typeof(myString));

// 3. toUpperCase()

// let myString = "I am Pakistani.";
// console.log(myString.toUpperCase());

// 4. toLowerCase()

// let myString = "I am Pakistani.";
// console.log(myString.toLowerCase());

// 5. trim()

// let myString = "  I am Pakistani.  ";
// console.log(myString.trim());

// 6. trimStart()

// let myString = "  I am Pakistani.  ";
// console.log(myString.trimStart());

// 7. trimEnd()

// let myString = "  I am Pakistani.  ";
// console.log(myString.trimEnd());

// 8. indexOf()

// let myString = "I am Pakistani.";
// console.log(myString.indexOf("a"));

// 9. slice()

// let myString = "I am Pakistani.";
// console.log(myString.slice(0));
// console.log(myString.slice(3,7));

// 10. replace()

// let myString = "I am Pakistani.";
// console.log(myString.replace(" ","_"));

// 11. replaceAll()

// let myString = "I am Pakistani.";
// console.log(myString.replaceAll(" ","_"));

// 12. repeat()

// let myString = "I am Pakistani.";
// console.log(myString.repeat(3));

// 13. startWith()

// let myString = "I am Pakistani.";
// console.log(myString.startsWith("I"));

// 14. endsWith()

// let myString = "I am Pakistani.";
// console.log(myString.endsWith("."));

// 15. match()

// let myString = "I am Pakistani.";
// console.log(myString.match("I am Pakistani."));

// 16. matchAll()

// let myString = "I am Pakistani.";
// console.log(myString.matchAll("I"));

// ----------------------------------------------------------------------------
// template string

// let userName = "Mohsin";
// let userAge = 22;
// console.log(`My self ${userName} & i am ${userAge} years old.`);

// ----------------------------------------------------------------------------

// Primitive data types 
// string, number, boolean, BigInt, null, undefined, NaN

// ----------------------------------------------------------------------------

// Non-Primitive data types 
// Arrays, Object, functions, date, symbols

// ----------------------------------------------------------------------------

// operators
//  +,-,*,/,%,**,<,>,<=,>=,==,===,!=,!==

// ----------------------------------------------------------------------------

// truthy & falsy values
// falsy values      -->    0,false, NaN, null, undefined.9
// truthy values     -->    rest of the values are all truthy.

// ----------------------------------------------------------------------------

// conditionals & nested conditionals

// conditionals

// let num1 = 30;
// let num2 = 20;
// if (num1 < num2) {
//     console.log("Num 1 is lesser than num2.")
// } else if (num1 > num2) {
//     console.log("Num 1 is greater than num2.")
// } else if (num1 === num2) {
//     console.log("Num 1 is equal than num2.")
// } else {
//     console.log("Error")
// }

// nested conditionals

// let guessValue = 20;
// let targetValue = 20;

// if (guessValue) {
//     if (guessValue === targetValue) {
//         console.log("Congratulations You Win...!");
//     } else if (guessValue < targetValue) {
//         console.log("Guess High Number");
//     } else if (guessValue > targetValue) {
//         console.log("Guess Low Number");
//     } else {
//         console.log("Error");
//     }
// }

// ----------------------------------------------------------------------------

// Ternary operator
// let age = 15;
// let drink = age <= 12 ? "Milk" : "Coffee";

// console.log(drink)

// ----------------------------------------------------------------------------

// & , || operators

// let age = 19;

// let game1 = "Cricket";
// let game2 = "Basketball";

// if (age > 12 & age <= 18){
//     console.log(`You can play ${game1}`);
// }else if (age === 19 || age > 19 ){
//     console.log(`You can play both games ${game1} ${game2}`);
// }else{
//     console.log("Age is Limited");
// }

// ----------------------------------------------------------------------------

// switch statement

// let number = 3;
// switch (number) {
//     case 0:
//         console.log("Your case number is 0");
//         break
//     case 1:
//         console.log("Your case number is 1");
//         break
//     case 2:
//         console.log("Your case number is 2");
//         break
//     default:
//         console.log("Default Case");
//         break
// }

// ----------------------------------------------------------------------------

// loops (while, do while, for,  for in, for of, forEach )

// while loop

// let i = 0;
// while (i <= 10){
//     console.log(i);
//     i++
// }

// ____________________________

// do while loop

// let i = 1;

// do{
//     console.log(i, "i am do while loop")
//     i++
// }
// while (i < 0);{
// }

// ____________________________

// for loop

// for (let i = 1; i <= 10; i++){
//     console.log(i)
// }

// ____________________________

// for in loop
// it is mostly used in objects & maps

// const obj = {
//     uerName: 'mohsin',
//     userAge: 22,
//     userGender: 'male'
// };

// for (let key in obj) {
//     console.log(key,"  :  ", obj[key]);
// };

// ____________________________

// for of loop
// it is mostly used in arays

// const fruits = ['apple','orange', 'pineapple','banana']

// for (let key of fruits) {
//     console.log(key);
// };

// ____________________________

// forEach loop
// it is mostly used in arays

// const fruits = ['apple', 'orange', 'pineapple', 'banana']

// fruits.forEach((fruit, index) => {
//     console.log(index, fruit);
// })

// ----------------------------------------------------------------------------

// break & continue fnc
// it is used to break or continue the operation inside a function or loop 

// for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//         console.log("broked");
//         break;                                       // Skip the iteration when i is 3
//     }
//     console.log(i);                                     // This will print 0, 1, 2, 3, 4, 6, 7, 8, 9
// }

// ____________________________


// for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//         console.log("skipped");
//         continue;                                       // Skip the iteration when i is 3
//     }
//     console.log(i);                                     // This will print 0, 1, 2, 3, 4, 6, 7, 8, 9
// }

// ----------------------------------------------------------------------------

// intro to array in JS
// const array = ['Mohsin', "apple", 23, 23.8, null, undefined, NaN];

// console.log(array);

// typeof array
// console.log(typeof(array));

// indexing in an array

// forward / positive indexing

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[5]);
// console.log(array[6]);

// reverse / negative indexing

// console.log(array[array.length - 1]);
// console.log(array[array.length - 2]);
// console.log(array[array.length - 3]);
// console.log(array[array.length - 4]);
// console.log(array[array.length - 5]);
// console.log(array[array.length - 6]);
// console.log(array[array.length - 7]);

// ----------------------------------------------------------------------------

// array methods push,pop,shift, unshift

// const array = ['apple','mango','orange'];

// push             --> add to the last of array

// let pushArray = array.push('strawberry');
// console.log(array)

// pop             --> delete form the last of array

// let popArray = array.pop();
// console.log(array)

// unshift             --> add at the start of array

// let unshiftArray = array.unshift("banana");
// console.log(array)

// shift             --> delete from the start of array

// let shiftArray = array.shift();
// console.log(array)

// splice             --> delete from the specific index

// let shiftArray = array.splice(0,1);
// console.log(array)

// ----------------------------------------------------------------------------

// clone an array

// there are 4 easy ways to clone an array
// 1. copy paste the entire array

// const array_1 = ['apple','banana'];
// const array_2 = ['apple','banana'];

// 2. .concat() method 

// const array_1 = ['apple','banana'];
// const array_2 = [].concat(array_1);

// console.log(array_2)

// 3. .slice() method 

// const array_1 = ['apple','banana'];
// const array_2 = array_1.slice(0);

// console.log(array_2)

// 4. spread operator 

// const array_1 = ['apple','banana'];
// const array_2 = [...array_1];

// console.log(array_2)

// ----------------------------------------------------------------------------

// array destructuring
const array = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];
// let [ind1, ind2, ind3, ind4, ind5] = array;
// console.log(ind1, ind2, ind3, ind4, ind5)

// to skip an index use , (single coma for 1. ,, double coma for 2 & soo on)

// let [ind1, , ind3, ind4] = array;
// console.log(ind1, ind3, ind4);

// let [ind1, , , ind4, ind5] = array;
// console.log(ind1, ind4, ind5);

// let [ind1, ind2, ...leftover] = array;
// console.log(leftover)

// ----------------------------------------------------------------------------

// intro to objects in JS
// const obj = {
//     key1: 'value 1',
//     key2: 'value 2',
//     key3: 'value 3'
// };

// console.log(obj.key1)
// console.log(obj.key2)
// console.log(obj.key3)

// add key value pair

// obj.key4 = "value 4";
// console.log(obj.key4)

// update the value of a specific key 

// obj.key1 = "item 1";
// obj.key2 = "item 2";
// obj.key3 = "item 3";
// obj.key4 = "item 4";
// console.log(obj)


// add an array inside key 

// let myItems = ['ball', 'bat', 'wickets'];

// obj.key4 = myItems;
// console.log(obj)

// ----------------------------------------------------------------------------

// dot vs bracket notation


// const obj = {
//     userName: 'khalid',
//     userGender: 'male'
// }

// dot notation 

// console.log(obj.userName);
// console.log(obj.userGender);

// bracket notation

// console.log(obj["userName"]);
// console.log(obj["userGender"]);

// ----------------------------------------------------------------------------

// object iteration 

// for in loop


// const obj = {
//     userName: 'khalid',
//     userGender: 'male',
//     userAge: 20,
//     userDomicile: 'peshawar'
// };


// for in loop

// for (let key in obj){
//     console.log(key, obj[key])
// }

// for of loop

// we use these loops by using the object.keys() method

// const objectToArray = Object.keys(obj)                   // it returns an array 
// console.log(Array.isArray(objectToArray))
// console.log(objectToArray)

// // now we apply loop on object
// for (let key of objectToArray){
//     console.log(key, obj[key])
// }

// ----------------------------------------------------------------------------

// computed properties

// const key1 = 'userName';
// const key2 = 'userGender';
// const key3 = "userAge";
// const key4 = 'userAddress';

// const val1 = 'khalid';
// const val2 = 'male';
// const val3 = 20;
// const val4 = 'peshawar';


// // computed property
// const userData = {
//     [key1]: val1,
//     [key2]: val2,
//     [key3]: val3,
//     [key4]: val4,
// }
// console.log(userData)

// console.log(userData.userName)
// console.log(userData.userAge)
// console.log(userData.userGender)
// console.log(userData.userAddress)

// ----------------------------------------------------------------------------


// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

