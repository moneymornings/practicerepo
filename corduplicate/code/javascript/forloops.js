// Let's search for the Braves in the array using a for loop'

let teams = ["Braves", "Reds", "Yankees", "Red Sox", "Marlins"]; // The last index is 4

/*For loops have three steps
Step 1: Set the starting point (let index = 0;)
We create a variable that serves as a placeholder for the index we are currently pointing at.
Since we want to start our loop at the first index we set the value to 0

Step 2: Set the end condition (index < teams.length;)
We set up a condition for our loop to stop running. If the condition is never met, an
infinite loop may occur which could crash your computer. The condition must stop the
loop from going past the last index in the array.

The .length property returns the number of elements in an array, which is always equal to
the last index + 1. By setting our condition to index < teams.length, the loop will always
end at the last index

Step 3: Increment the value of the index
Everytime the loop reaches the end of the for loops scope, it will return to the top of the
code block. Once this occurs, the value of index will be incremented by 1.
*/

/*
The following loop prints all teams that are inside of the array
*/
console.log("All teams in order");
for (let index = 0; index < teams.length; index++) {
  console.log(teams[index]);
}

/*
Print every team at an odd index
*/
console.log("\nAll teams that are in an odd index");
for (let index = 0; index < teams.length; index++) {
  // Modulo divides a value and it returns the remainder
  // ex: 3 % 2 = 1
  // ex: 13 % 5 = 3
  if (index % 2 != 0) {
    console.log(teams[index]);
  }
}

/*
Print the array of teams in reverse
*/
console.log("\nAll teams in reverse");
for (let index = teams.length - 1; index >= 0; index--) {
  console.log(teams[index]);
}

// Part I: Print out every team that has an attendance over 30000.
// Part II: Print the list of teams in alphabetical order by name
teams = [
  {
    name: "Braves",
    city: "Atlanta", // Not really in Atlanta
    state: "GA",
    avgAttendance: 39401,
  },
  {
    name: "Reds",
    city: "Cincinatti",
    state: "OH",
    avgAttendance: 25164,
  },
  {
    name: "Yankees",
    city: "New York City",
    state: "NY",
    avgAttendance: 40862,
  },
  {
    name: "Red Sox",
    city: "Boston",
    state: "MA",
    avgAttendance: 32989,
  },
];

for (let i = 0; i < teams.length - 1; i++) {
  console.log("Current team: ", teams[i].name);
  console.log("Next team: ", teams[i + 1].name);
  if (teams[i].name < teams[i + 1].name) {
    console.log("Current teams name comes before the next team name");
  }
}
