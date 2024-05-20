function names(){ console.log("Nipun");
console.log("Magotra");}

// names() calling
// names reference
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
