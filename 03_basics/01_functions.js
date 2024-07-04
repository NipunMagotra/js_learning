function nameDivision (){
    console.log("N");
    console.log("I");
    console.log("P");
    console.log("U");
    console.log("N");
}
// nameDivision ()

function addTwoNo (a, b){
return a+b;
}
// console.log(addTwoNo(2,3));   

function userStatus(username = "joe"){
    
    return `${username} is logged in`
}
// console.log(userStatus("Nipun")); 

//Shopping cart function
function calculateCart(...num1){
    return num1;

}
console.log(calculateCart(23,44,34))

// Object in function
const randomObject ={ name:"Nipun",
    bill:234
}
function totalBill (object){
    return (`name is ${object.name} and the total bill is ₹${object.bill}`);
}
// console.log(totalBill(randomObject));

//Array in function
const newArray =[12,2,23,44,44,4,53]
function returnThirdValue(givenArray){
    return givenArray[2]
}
console.log(returnThirdValue(newArray));