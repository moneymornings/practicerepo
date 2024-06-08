let die1 = Math.ceil(Math.random() * 6);
let die2 = Math.ceil(Math.random() * 6);
let dieTotal = die1 + die2;
let dieTotal2 = die1 + die2;


function userone() {
    let die1 = Math.ceil(Math.random() * 6);
    console.log("user1Die1: " + die1);
    let die2 = Math.ceil(Math.random() * 6);
    console.log("user1Die2: " + die2);
    let dieTotal = die1 + die2;
    console.log("user1TotalRoll: " + dieTotal);
}

function usertwo() {
    let die1 = Math.ceil(Math.random() * 6);
    console.log("user2Die1: " + die1);
    let die2 = Math.ceil(Math.random() * 6);
    console.log("user2Die2: " + die2)
    let dieTotal2 = die1 + die2;
    console.log("user2TotalRoll: " + dieTotal2);


}


if (dieTotal > dieTotal2) {
    console.log( "user1 wins");

} else if (dieTotal2 < dieTotal) {
    console.log ("user2 wins");

} else {(dieTotal === dieTotal2) 
        console.log ("tie");
    

}

userone()
usertwo()
