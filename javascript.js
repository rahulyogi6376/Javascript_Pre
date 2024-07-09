
// Nameing Rulse

// PascalCase :  
// let ClassName="Rahul";
// let StudentsInfo=12;


// const varibles ko UparSnekCase Me Use Karte HAi
// UperSnekCase
// const FULL_NAME = "Rahul Yogi"


// CamelCase
// let myName = "Rahul" 

// CamelCase
// var lastName = "yogi" 


// Var Variable

var fname="sanju";
document.write('<br>'+fname)



//var ko redeclaring kar sakte h for ex
// var variables me same name ka variables bana sakte hai
// var variables se fir new value add ya access kar sakte hai
var num=200;
var num=500;
document.write('<br>'+num)



// var is a  function scope and global scope
// var variables ko function me acccess karwane ke liye function ko coll karwana hota hai

// var is a  function scope
// var variables only function me hi access hota hai
// var variables ko function scope function ke bhar access karwane par undefind show karta hai
function functionScope() {
    var address="Jaipur";
    document.write('<br>'+address)
}
functionScope()



// var is a  globle scope
// var variables globle scope me kahi par bhi access karwa sakte hai
var address="Chomu";
function functionGloble() {
    document.write('<br>'+address)
}
functionGloble()



//Hoisting
// What is a hoisting
// variables aur function declarations ko code ke execution se pehle hi memory me allocate kar diya jaata hai. eski wajah se var se declare kiye gaye variables ko unki declaration se pehle access kiya ja sakta hai, lekin unki value undefined hoti hai.

var firstName;
document.write('<br>'+firstName) // output undefind aayega





//let is a block scope and global scope
//let block-scoped hota hai, aur yeh variable sirf us block ke andar accessible hota hai jaha
//yeh declare kiya gaya ho. Yeh global scope mein bhi declare ho sakta hai, lekin uski visibility sirf usi block ke andar hoti hai jahan yeh declare hua hai.

let myName = "Rahul" // string data type //
document.write(myName)
document.write( typeof myName)



let age = 22  // number data type //
document.write('<br>'+age)
document.write( typeof age)



let myLastName = "Yogi" // string data type //
document.write('<br>'+myLastName)

document.write('<br>'+myName+" "+myLastName+" "+age)



let isRahul = true; //boolean data type //
document.write('<br>'+isRahul)
document.write('<br>'+ typeof isRahul)



// Object data type //
let deatils = {
    firstName: "Rahul",
    age: 18,
    class: "12th",
    city: "jaipur",
}
console.log(deatils)
console.log(deatils.age)
console.log(typeof deatils)


// Array data type //
let fruits=['Apple','Orange','Banana']
document.write('<br>'+fruits)
document.write('<br>'+typeof fruits)


// let Block Scope Example
if(true){
let countNomber = 300;
document.write('<br>'+ countNomber)
}
// document.write(countNomber); // Error: x is not defined


// Redeclaration with let
//let se declare kiye gaye variables ko ek hi scope ke andar dubara declare nahi kiya ja sakta. Agar aap aisa karte hain, to JavaScript ek error throw karta hai.
// let me same name ka variables globle  me bhi use karne par error show karta hai

// {
//     let a=20;
// let a=20;
// document.write('<br>'+a)
// }



// Const Variables

const contry='india'
document.write('<br>'+contry)

// const variables is a block scope

{
    const city='Jaipur';
document.write('<br>'+contry)

}



// Operations

// Arithmetic Operations

let a = 1;
let b = 6;
let x = (1+1)*a
document.write(a+b)
document.write('<br>'+x)


// JavaScript Function
// 1. Function Declaration vs. Function Expression

// Function Declaration:
// jab kisi funtion ko declared karte hai , to uske code ko define karne ke liye funtone ko call karwate hai

function Remove(a , b) {
    return a-b
}
console.log(Remove(12,44))



// Function Expression:
// esme ye hai funtion ko upar call nhi kra sakte ,kyo ki ye variabale me assing ho rha hai, tabhi esko code ke niche hi call karte hai, 
let javascript = function(a, b) {
return a + b
}
console.log(javascript("Rahul", "Sanju"))




// 2. Arrow Functions
// errow funtion ko 2 tarah se likh sakte hai

const student=(a , b)=>{
    return a * b
}
console.log(student(4,4))



// Default Parameters
// es me adhik perameters pass karwane or defauld value pass karwane me kaam aata hai ,esme agar perameters me value pass nhi karne par undefiend batata hai, 
function myFunction(firstName="guset",lastName=""){
    console.log(firstName,lastName)
} 
myFunction("rahul")


// 4. Rest Parameters


function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));