//arrays

const firstArray =[0,1,2,3,4,5,6,7,8,9,0]
console.log(firstArray[0]);
const Heroes = ["flash", "battle star galatica","red ranger"  ]
console.log(Heroes[2]);
const newWayArray = new Array(1,3,4,  "happy ", "singh")
console.log(newWayArray[4]);

const newArray = [1,34,56,64,5,6,4,4]
newArray.push("hello") // append hello
newArray.pop() // remove last element
newArray.unshift("welcome") // add element at the start
newArray.shift() // remove element at the start

console.log(newArray.includes(1));
console.log(newArray.indexOf(56));


//  Slice and splice
const myArray = [1,2,3,4,5,6,7,8,9,0]
console.log("original array",myArray);
console.log("slice",myArray.slice(1,5));
console.log("after slice",myArray);
console.log("splice",myArray.splice(1,5));
console.log("after splice",myArray);

