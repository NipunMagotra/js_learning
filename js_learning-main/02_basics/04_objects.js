// ways to declare object ?
// 1. object literal
// 2. object constructor

// 2. object constructor

// const fbuser = new Object() // object constructor ( this is a singleton object )
let fbuser = { name: "Balu Bhai", age: 100, email: "balu@gmail.com" };
// console.log(fbuser);

let instaUser = {
  email: "user@gmail.com",
  fullName: {
    firstName: "Nipun",
    lastName: "Babu",
  },
  age: 20,
};
// console.log(instaUser.fullName.lastName);EOP ->Babu

// merge two objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const newMerge1 = Object.assign({}, obj1, obj2); // this is a old way to merge two objects = using assign method
const newMerge2 = { ...obj1, ...obj2 }; //  this is a new way to merge two objects = spread operator
console.log(newMerge1);
console.log(newMerge2);

// array of objects
const users = [
  { name: "Balu Bhai", age: 100, email: "balu@gmail.com" },
  {
    email: "user@gmail.com",
    fullName: {
      firstName: "Nipun",
      lastName: "Babu",
    },
    age: 20,
  },
];
// Print the full name of the first user in the 'users' array
console.log(users[0].fullName);

// Print all the keys of the properties in the first user object in the 'users' array
console.log(Object.keys(users[0]));

// Print all the values of the properties in the second user object in the 'users' array
console.log(Object.values(users[1]));

// Check if the 'fbuser' object has a property named "Balu Bhai" and log the result
console.log(fbuser.hasOwnProperty("Balu Bhai"));
