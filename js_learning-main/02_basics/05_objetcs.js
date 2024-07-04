// de-structuring of object and array

// object
let course = {
    name:"js",
    price:"150",
    duration:"1 month"

}
let {price:rs}= course
console.log(rs);

//array

let newArray = [1,2,3,4,5] 
let [a,b,c,d,e] = newArray   // array destructing
console.log(a);
console.log(b);
console.log(c);
console.log(d);