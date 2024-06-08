// Comments in javascript are two forward slashes

/* A block can be used to comment several lines of code at
   the same time */


/* Javascript Datatypes*/
//--------------------------------------------------------
/*

Number: the number datatype holds any number, decimal, or fraction.
         arithmetic can be performed on numbers i.e 4 + 2, 8 * 6, etc
          Ex: 56, 84.22, 5/9, etc  age = 56

String: stores characters and text
Ex: "Hello", 'today is cloudy', `highs are in the 70s`, "50"

Boolean: true/false value
Ex: isRaining = false

Array: a data structure that can store multiple values
Ex: groceryList = ["grapes", "bread", "eggs", "milk"]


Object: organizing metadata about a topic in one variable
Ex: cat = {
    fur: "orange",
    eyes: "green",
    weight: 10,
    tail: true
}

*/

// let is a keyword that initializes the variable name. A variable 
// initialized with let can be modified multiple times
let fullname = "Dre Taylor";
fullname = "City of Refuge";

// A variable initialized with const cannot be changed
const birthyear = 1900;


let user = {
    email: "dre@test.com",
    password: "password123",
    address: "123 Apple Lane",
    city: "Atlanta"
}

list = [43, 543, 532, 5];

// Data can be printed to the terminal using the function console.log()
// When a function is called, any variables passed into the function are
// called arguments

console.log(fullname);
console.log(birthyear);
console.log(user);
console.log(list);


let age = "45";
age = age + 1;

console.log("Age: ", age)

// Camelcase is when we start a variable with lowercase, and each new is 
// Uppercase
let firstName = 'Dre'

//Snake case uses all lowercase and separates words by _
let last_name = 'Taylor'
//Concatentation
completeName = firstName + " " + last_name;
console.log(completeName);