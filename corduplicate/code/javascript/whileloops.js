/* 
While loops are very similar to for loops, but they do not auto
increment the index nor do they set a condition to when the loop
should end
*/


let bool = [true, false, false, true, true, true, false];

let i = 0;
while(i < bool.length) {
    if(bool[i] === true) {
        console.log(i);
    }
    i++;
}

/*
Use your favorite browser to figure out how to convert the current list
of user birthdays from a string to a date. 

Determine if you can compare dates using <, >, == similar to any regular number

Determine which users are eligible to run for president based on the US age restriction
*/

let userAccounts = [
    {
    name: "John Doe",
    birthday: "05/24/1974",
    email: "john@email.com"
}, {
    name: "Ashley Jones",
    birthday: "07/09/1986",
    email: "ashley@email.com"
}, {
    name: "Mike Brown",
    birthday: "11/12/2004",
    email: "mike@email.com"
}, {
    name: "Jake Smith",
    birthday: "12/03/1999",
    email: "jake@email.com"
},
]


// Step 1: Generate random 7 digit numbers

// Step 2: Determine if an id has already been used

// Question 1: How do we know if a number has already been used?
// Answer: Use an array to store the numbers that have already been used



let invalidIds = [];

function generateNewId() {
    // Its too difficult test initially for a 7 digit id so I start
    // by testing one digit ids
    let id = Math.ceil(Math.random() * 4);
    // Loop through the invalidid array to see if id generated exists
    // in the array of already used ids
    for(let i = 0; i < invalidIds.length; i++) {
        console.log("invalidID: ", invalidIds[i]);
        // The id generated has already been used, call generated id again
        if(id === invalidIds[i]) {
            console.log('Duplicate found!');
            console.log("Generated id: ", id);
            return generateNewId();
        }
    }
    // Push the new unique id the list of already used ids
    invalidIds.push(id);
    console.log("Invalid ID Array", invalidIds);
    // Return the valid id to the getBirthdays()
    return id;
}

function getBirthdates(users) {
    let i = 0;
    while(i < users.length){
        users[i].id = generateNewId();
        i++;
    }
    console.log(users);
}

/*
Generate a random id that is 7 digits long and is not a duplicate
i.e. another candidate cannot have the same id
*/

getBirthdates(userAccounts);


