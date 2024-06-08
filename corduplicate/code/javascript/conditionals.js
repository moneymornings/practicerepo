/* Conditionals: runs blocks of code depending on the condition 
    is true or false */

let temperature = 87;

// If statements only run blocks of code when the condition evaluates to
// true
if(temperature <= 72) {
    console.log(`It's cold`);
} 

// We can also run code blocks based on a statement NOT being true
// ! means NOT
if(temperature != 72) {
    console.log("Today is not a perfect day");
    console.log("Wait for another day to go outside");
}

let isSaturday = false;
if(isSaturday = true) {
    console.log("It's the weekend!")
}

// Single = is used for assignment, meaning we are assigning a
// value to a variable

// When trying to determine if two values are equal to each other
// use ==

let day = "Tuesday";
if(day == "Monday") {
    console.log("It's the worst day of the week");
}

// === also determines if values are equivalent, but also checks if
// the type is equivalent

let score = 733;
// Checks both the value and datatype 
if(score === "50") {
    console.log("That's a great score");
}


// else can be used as a catch all when none of the conditions are met
let price = 40000;
// The computer is going to determine if the first if condition is true/false
if(price < 25000) {
    console.log("Buy the car with cash");
    // Use the &&(AND) to evaluate more than one condition in
    // a single statement
} else if(price >= 25000 && price < 35000) {
    console.log("Pay $25000 cash and finance the rest");
} else {
    console.log("The car is too expensive, pick a different one");
}
