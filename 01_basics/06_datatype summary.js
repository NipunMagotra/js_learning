// # Primitive data types(call by value )

// 7 types : String, number , Boolean ,null , undefined , symbol , Bigint 



const score = 100.1
const isLoggedIn = true
const pName ="Apple" 
const weatherResult = null
const output = undefined 
const id = Symbol(111)
const anotherId = 111
// console.log(id == anotherId)// o/p -> false

const bigNo = 14141414411414n




// # Non-Primitive (reference)

// 3 types : Object , Array, Functions 

let names = ["Nipun", "Amish", "wizard"] // aarays are in square brackets
let obj1 = { name:"nipun", age:20}// objects are in curly braces and in key value pairs and you can store
// functions , objects ,arrays , var in the objects

let myFun = function(){
    console.log("I am a function")
}
console.log( typeof (names, obj1, bigNo));


// 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢->

// Stack(Primitive data types(call by value ) and Heap memory (Non-Primitive (reference)

//Stack(Primitive data types(call by value )
let myYtName = "NipunGamingYT"
let newYtName = myYtName
newYtName = "CodingwithNipun"
console.log(myYtName)//NipunGamingYT
console.log(newYtName)//CodingwithNipun


// Heap memory (Non-Primitive (reference)

let user1 = {id:"one@gmail.com",
pass:123}
let user2 = user1

user2.id = "two@gmail.com"
console.log(user1.id)//two@gmail.com
user2.pass = 456
console.log(user1.pass)//456

