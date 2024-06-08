function Rolldie(user1, user2) {
    let die1 = Math.ceil(Math.random() * 6);
    let die2 = Math.ceil(Math.random() * 6);
    return die1 + die2;

}

function diceGame() {
    let user1 = Rolldie();
    let user2 = Rolldie();
 console.log("User1: %d\nUser2: %d", user1, user2);

if (user1 > user2)   {
    console.log("User1 Wins!");
} else if (user2 > user1)   {
    console.log( "User2 Wins!"); 
     } else {
        console.log ( `It's a Tie! Go Again!`);
     }
    
    }

     diceGame()







