//Bad syntax - outdated syntax
// const name ="Nipun"
// const repoCount = 11

// console.log(name+repoCount+" value")

//new syntax - string interpolation'
const name ="Nipun"
const repoCount = 11 
 
console.log(`Name is ${name} and my repo count is ${repoCount}`) 

// another way to declare string
const repoName = new String("Learning")

// commom methods in strings 
console.log(name.charAt(2)); // to find character at index 2
console.log(name.concat(" ", repoName)); //  to concat two strings
console.log(name.indexOf("i")); // to find index of character
console.log(name.replace("Nipun","Magotra"));   // to replace string
console.log(name.slice(3));// to slice string
console.log(name.split("")); // to split string into array
console.log(name.substring(1));// to get substring
console.log(name.toUpperCase()); // to convert string to uppercase
console.log(name.toLowerCase()); // to convert string to lowercase
console.log(name.trim()) // to remove white spaces
