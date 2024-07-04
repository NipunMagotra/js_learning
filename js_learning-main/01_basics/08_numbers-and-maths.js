// const marks = 100; // Define a constant variable 'marks' and assign the value 100 to it
// console.log(marks); // Output the value of 'marks'

// const newMarks = new Number(50); // Create a new Number object 'newMarks' with the value 50
// console.log(newMarks); // Output the value of 'newMarks'
// console.log(newMarks.toString().length); // Output the length of the string representation of 'newMarks'
// console.log(newMarks.toFixed(1)); // Output 'newMarks' with one decimal point

// const floatNumber = 11.554; // Define a floating-point number 'floatNumber' with the value 11.554
// console.log(floatNumber.toPrecision(3)); // Output 'floatNumber' with a precision of 3

// const numbers = 121311; // Define a number 'numbers' with the value 121311
// console.log(numbers.toLocaleString("en-IN")); // Output 'numbers' formatted with Indian English locale


// =============================================MATHS==================================================== //

// some Math functions
// console.log(Math.abs(-11)) // return  positive value ->2
// console.log(Math.ceil(1.1)) // return 2 , , maximum value e.g 1.1 -> 2 or 1.9 -> 2

// console.log(Math.floor(1.1)) // return 1 , minimum value e.g 1.1 -> 1 or 1.9 -> 1
// console.log(Math.round(1.1)) // return 1 , round value e.g 1.1 -> 1 or 1.9 -> 2

// console.log(Math.min(4,3,1,31,1,13131,313,13,13,131,3)); // return minimum value -> 1
// console.log(Math.max(21,31,31,1,212,12,12,12,12,12,1)); // return maximum value -> 212

console.log(Math.random); // returns a random number between 0 (inclusive),  and 1 (exclusive)

console.log(Math.floor(Math.random()*10)+1); // returns a random number between 1 and 10

min = 10;
max = 20;

/*IMPORTANT LEARN IT*/console.log(Math.floor(Math.random()* (max - min +1)+min)); 
// returns a random number between 10 and 20

