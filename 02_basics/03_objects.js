// what is object?
// object is a real world entity which has some properties and behaviour

// ways to declare object ?
// 1. object literal
// 2. object constructor


// 1. object literal

const mySym =Symbol("shimbal") // symbol declaration (it is a unique value)
const persons = {name : "nipun",age : 20, location: "Jammu", isLoggedIn: false, [mySym]:"omSymbol"}
// console.log(persons.name);
// console.log(persons["name"]);
// console.log(persons);
// persons.location = "Kashmir"
// console.log(persons);
// Object.freeze(persons) // it will not allow to change the value of object
// persons.name = "shimbal"
// console.log(persons);  // it will not change the value of object

persons.greetings = function(){
    console.log(`hello my person, ${this.name}`);
}
persons.greetings()




