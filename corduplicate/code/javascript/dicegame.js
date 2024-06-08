// Initializing two users to a score of zero
// let user1 = 0;
// let user2 = 0;

// // Initializing the two die
// let die1 = Math.ceil(Math.random() * 6);
// let die2 = Math.ceil(Math.random() * 6);

// function diceRoll(die1, die2) {
//   // Getting the score total
//   user1 = die1 + die2;

//   // Calculating the score for player
//   die1 = Math.ceil(Math.random() * 6);
//   die2 = Math.ceil(Math.random() * 6);
//   user2 = die1 + die2;

//   console.log("User1 score: ", user1);
//   console.log("User2 score: ", user2);

//   if (user1 > user2) {
//     console.log("user 1 wins");
//   } else if (user2 > user1) {
//     console.log("user2 wins");
//   } else {
//     console.log("It's a tie");
//   }
// }

// diceRoll(die1, die2);

// ----------------------------------------------------------------------------------------

function dieRoll() {
  let die1 = Math.ceil(Math.random() * 6);
  let die2 = Math.ceil(Math.random() * 6);
  // Returns a value to the function caller
  return die1 + die2;
}

function diceGame() {
  // The dicegame function calls the dieroll function
  // The return value from dieroll is assigned to user1 and user2 scores
  let user1 = dieRoll();
  let user2 = dieRoll();
  // String Formatting, %d this is a placeholder for a number
  //                    \n indicates a new line
  console.log("User 1: %d\nUser2: %d", user1, user2);

  if (user1 > user2) {
    console.log("User 1 wins");
  } else if (user2 > user1) {
    console.log("User 2 wins");
  } else {
    console.log("It's a tie");
  }
}

// Starts the game
diceGame();
