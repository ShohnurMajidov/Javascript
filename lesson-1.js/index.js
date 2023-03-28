// // -------------------------------------

// // prifex (old) and postfix (orqa)


let a = 1, b = 1;

let c = ++a;      
let d = b;
// let e = d++;
// let p = d++;
// let g = d++;
// let m = d++;
// let x = d++;
// let z = d++;
let e = ++d;
let p = ++d;
let g = ++d;
let m = ++d;
let x = ++d;
let z = ++d;
let y = d;

// console.log(a); // a = 2   
// console.log(b); // b = 1
// console.log(c); // c = 2

console.log(d); // d = 7
// console.log(e); // e = 1   
// console.log(p); // p = 2  
// console.log(g); // g = 3
// console.log(m); // m = 4
// console.log(x); // x = 5
// console.log(z); // z = 6
// console.log(y); // y = 7



//The increment operator ( ++ ) increments its operand by 1 ;
// that is, it adds 1 to the existing value. There's a corresponding 
//decrement operator ( -- ) that decrements a variable's value by 1 .
// That is, it subtracts 1 from the value.

// -------------------------------------



// Assinment (qo'shish) result

let k = 2;

let l = 1 + (a *= 2);

console.log(x); // x = 5


// Assignment operator assigns a value to its left operand based on the value of its right operand. 
//The simple assignment operator is equal ( = ), which assigns the value of its right operand to its left operand.

// -------------------------------------



// Type Conversion


//Type conversion (or typecasting) means transfer of data from one data type to another. 
//Implicit conversion happens when the compiler (for compiled languages) or runtime (for script languages like JavaScript) automatically converts data types.
// The source code can also explicitly require a conversion to take place.


//The unary + operator can be used to convert a variable to a number:

console.log( typeof("" + 1 + 0));   //  string  

console.log("" + 1 + 0); // 10

console.log( typeof("" - 1 + 0));   // number
console.log("" - 1 + 0);   // -1

console.log( true + false);  // 1
console.log(typeof( true + false)); // number


console.log(typeof(6 / "3")); // number
console.log(6 / "3");  //2

console.log( "2" * "3");   // 6
console.log(typeof("2" * "3")); // number

console.log( 4 + 5 +"px"); //9px
console.log( typeof(4 + 5 +"px")); // string

console.log( "$" + 4 + 5); // $45
console.log(typeof( "$" + 4 + 5)); //string 

console.log( "4" - 2); // 2
console.log(typeof( "4" - 2)); // number

console.log( "4px" - 2); // NaN
console.log(typeof("4px" - 2)); // number

console.log("-9" + 5); // -95
console.log(typeof( "-9" + 5)); // string 

console.log("-9" - 5); // -14
console.log(typeof( "-9" - 5)); // number 


console.log( null + 1);  // 1
console.log( typeof(null + 1)); // number


console.log( undefined + 1); // NaN
console.log( typeof(undefined + 1)); // number


console.log( "/t /n" - 2); // NaN
console.log( typeof("/t /n" - 2)); // number


// -------------------------------------



// Comparisons
//When we want to compare two values in JavaScript, 
//we use comparison operators provided by JavaScript.
// After the comparison is made, Comparison Operators return a boolean value that is either true or false based on comparison. 
//For example, if we want to see which value is greater between 55 and 45, we can use the greater than (>) comparison operator like this (55 > 45). 
//This will return true as 55 is greater than 45. In this article, we will see eight such comparison operators in JavaScript and discuss their behaviour with operands of different data types in detail.

console.log(5 > 4);   // true
console.log("apple" > "pineapple"); // false
console.log("2" > "12");  // true
console.log(undefined == null); //true
console.log(undefined === null); // false
console.log(null == "/n0/n");  //false
console.log(null == +"/n0/n"); //false
console.log(null == false); // false
console.log(null == 0); // false



// ------------------------------------------

// let a = 2;
// let b = "3";
// let c = "10.58459393";

// console.log(isNaN(a+ +b)); => false because "+b" 

// console.log(a+ +b); b oldidagi "+" stringni numberga otkazib yuboradi

// console.log(a * b); arifmetik amal chunki "+"mas, faqat "+" numberni stringa qoshib string qlb qo'yadi

// console.log(+a - b); plus "+"dan boshqa hamma arifmetik ammalar default arifmetik amal bo'lib ishlaydi

// console.log(Number(b)); "Number" string ichida faqatgina raqam bolsa numberga otkazadi

// console.log(Number.parseInt(c)); pizdes

// console.log(Number.parseFloat(c)); Number.parseFloat kasr sonni ozgartirmasdan ozidek chqaradi

// console.log( true == 1 ); => true

// console.log( false == 0 ); => true

// console.log( false == false ); => true

// console.log( true == true ); => true

// console.log( false == true ); => false

// console.log(typeof )

// console.log( undefined == false ); => false

// console.log( undefined == true ); => false

// console.log( null == false ); => false

// console.log( undefined == null ); => true

console.log( false == "0" ); // => true

// ====================================================

// let a = 1;

// let b = a + true;

// console.log( true + true ); => 2
  

