function names(){ console.log("Nipun");
console.log("Magotra");}

names() //calling
names //reference

 function addTwoNumbers(number1 , number2){
    return number1+number2
 }

 console.log(addTwoNumbers(2, 9))

 function userLoggedIn(username = "Johndoe"){ // johndoe is deafult
    if(!username){
        console.log("pls enter username");
    }
    return`${username} just login hua`
 }
 console.log(userLoggedIn("Nipun"));  


function calculateCart(...num1){
   return num1
}
console.log(calculateCart(212,4,33,4)); 

// handle objects in functions
const user ={
   username : "Nipun",
   age : 99,
   price : 10
}
function objectUsingFunction(anyobject){
   console.log(`name is ${anyobject.username} and age is ${anyobject.age}`);

}
objectUsingFunction(user)

// handle array in functions 
const newArray  = [200, 22,444,55,6,77,89]
function returnSecondValue(randomarray){
   return randomarray[1]
}
console.log(returnSecondValue(newArray))