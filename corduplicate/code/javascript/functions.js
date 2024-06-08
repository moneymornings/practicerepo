/* 
Functions are snippets of code that are run when called
*/

//Any variables declared outside of a function or code block has a
// global scope and can be called by any code block within the file

let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function sayHello(username) {
    console.log("Hi, my name is " + username);
}

// Variables declared within a function are scoped locally, meaning
// other functions do not have access to that variable
function generateWindWarning(day1, day2, day3) {
    let averageWindspeed = (day1 + day2 + day3)/3
    console.log(averageWindspeed);
    if(averageWindspeed < 0) {
        console.log("Illegal value provided");
    } else if(averageWindspeed < 5) {
        console.log("slightly windy");
    } else if(averageWindspeed >= 5 && averageWindspeed < 15) {
        console.log("Moderate winds, grab a jacket");
    } else if(averageWindspeed >= 15 && averageWindspeed < 25) {
        console.log("conditions are hazardous");
    } else if (averageWindspeed >= 25) {
        console.log("wind advisory warning");
    }
}

function generateWeatherWarning() {
    console.log(averageWindspeed);
}

//Checks if the users number matches the lottery number
function lottery(userNumber) {
    // Generate a random number, which is going to be the lottery
    // number
    let lotteryNumber = Math.ceil(Math.random() * 100);
    console.log("Usernumber: " + userNumber)
    console.log("Lotterynumber: " + lotteryNumber)
    if(userNumber === lotteryNumber) {
        console.log(`Congratulations! You've won the lottery!`);
    } else {
        console.log(`Better luck next time`);
    }
}

// To call a function, write the function name followed by a ()
//generateWindWarning(7, 12, 15);
//sayHello("Dre");
//generateWeatherWarning();
lottery(randomNumber);

/* 
Values that are passed to a function during a function call are called
arguments

Values that are received by the function that is being called are called
parameters
*/


