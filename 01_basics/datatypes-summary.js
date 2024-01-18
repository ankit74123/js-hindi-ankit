// Primitive

// 7 types : String , Number , Boolean , null , undefined , symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 235464616854685496854n

// Reference(Non primitive)
// Array , Objects , Functions

const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name:"ankit",
    age:22,
}

const myFunction =function (){
    console.log("Hello World");
}

console.log(typeof myFunction);

// +++++++++++++++++
// Stack , Heap

let myYoutubename = "hiteshchoudhary.com"
let anothername = myYoutubename
anothername = "ChaiAurCode"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);