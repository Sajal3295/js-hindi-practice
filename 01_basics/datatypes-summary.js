// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3
// TypeScript => const score:number = 100

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myobj = {
    name: "Sajal",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);





// +++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non- Primitive)

let myname = "sajalguptadotcom"

let anotherName = myname
anothername = "yks"

console.log(myname);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sajal@google.com"

console.log(userOne.email);
console.log(userTwo.email);