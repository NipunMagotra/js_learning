// num
let score = 11
let newScore = Number(score)
console.log(newScore)
console.log( typeof newScore)

 // number -> number 
 // "11abc" -> NaN
 // true -> 1
 // false -> 0


 //boolean
 let isLoggedIn = 1
 let isBoolean = Boolean(isLoggedIn)
 console.log(isBoolean);  

// 1 -> true
// 0 -> false
// boolean -> boolean
// "" -> false
// "abc" -> true


//String

let value = "great"
let newValue = String(value)
console.log(newValue);
console.log( typeof newValue);

//string -> string
// 123 -> "123"
//  true -> "true"
//  false -> "false"
//  null -> "null"
//  undefined -> "undefined"


//------------------------Operations------------------------------------------------------

let values = 10
let negValue = -values
console.log(negValue);

//Some operations

console.log(2+2); // addition  
console.log(2-2);// subtraction 

console.log(2*2); // multipication
console.log(2/2); // divide

console.log(2**2); // power
console.log(2%2); // remainder

let str1 = "hello "
let str2 = "Nipun"
let newStr =str1 +str2
console.log(newStr)
// expected output hello Nipun --- string concatenation

console.log(1 + "2")     //12
console.log("1" + 2)     //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //32     


let counter = 1
counter++;
console.log(counter); // increment ->2
 
let counter2 = 1
counter2--;
console.log(counter2); // decrement ->0


  


