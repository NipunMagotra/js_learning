const dcHeroes = ["batman","flash","superman","wonder woman"]
const marvelHeroes = ["ironman","thor","strange","moon knight"]

let allHeroes =
dcHeroes.concat(marvelHeroes) // concat() method is used to join two or more arrays
console.log(allHeroes);

let newHeroes = [...dcHeroes, ...marvelHeroes] // spread operator is used to join two or more arrays
console.log(newHeroes)// ... helps in spreading all elements in different arrays

let another_array = [1,2,31,4,5,[2,3,34,3], [,4,3,34,4,[3,3,33,3,33]]]
let new_another_array=another_array.flat(2) // flat() method is used to flatten the array
console.log(new_another_array) 

console.log(Array.isArray("apple")); // isArray() chk if "apple" is array or not
console.log(Array.from("apple"));// from() method is used to convert string to array

// Define the object
const obj = { a: 1, b: 2, c: 3 };

// Convert object values into an array
const valuesArray = Object.values(obj);
console.log("Values array:", valuesArray);

// Convert object keys into an array
const keysArray = Object.keys(obj);
console.log("Keys array:", keysArray);

// Convert both keys and values into an array of arrays
const entriesArray = Object.entries(obj);
console.log("Entries array:", entriesArray);

let marks1= 13
let marks2= 23
let marks3= 76
let total_marks_array = Array.of(marks1,marks2,marks3) // of() method is used to create an array
let new_total_marks_array = [marks1,marks2,marks3]// array literal is used to create an array

console.log(total_marks_array);
console.log(new_total_marks_array);