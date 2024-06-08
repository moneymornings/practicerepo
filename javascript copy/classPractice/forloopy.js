//say my name 7 times 

// for(i=0; i<7; i++){
//     let name = 'Money Bag Nu';
//     console.log( "I'm " + name);
// }


//sequence of #s 10-20

// for(i=10; i<=20; i++){
//  console.log(i);

// }

//sequence of even #s from 10 - 20; started with an even number 

// for(i = 10; i<=20; i+=2){
//     console.log(i);
// }

//sequnce of odd #s from 1-17; started with an odd number

// for(i = 1; i<=17; i+=2){
//     console.log(i);

// }

//breaking the loop -  the length will be what it is, put the stopping point in the if statement if (i == stopping point). 

// for(let i=1; i<=356; i++) {
//     if (i == 300) {
//         break;

//     }
//     console.log (i);
// }

//adding the sum of numbers 

// let sum = 0; 

// for (let i = 1; i<= 10; i++) {
//     sum += i; 
// }

//     console.log('The sum of 1 to 10 is: ', sum);

// Loop through array to check for odd and even numbers - 
//1. create array for all numbers;
//2.set empty arrays for evens & odds
//3. create for loop --- i< allNumbers.length;
//4. if statement: 
// if the numbers in the index of all numbers, 
// remainder is 2 and  not equal to 1, then push them 
//into even numbers array
//before the parentheses is wher you pushing them to = evenNumbers.push
// ( in parentheses is where you are pulling them from) = (allNumbers[i]);
//add , else statement
//push the odd numbers into the oddNumbers array = oddNumbers.push(allNumbers[i]);



// allNumbers = [1,16,11, 19, 23, 46, 85, 29, 71, 34, 12];
// evenNumbers = [];
// oddNumbers = []; 

// for (i =0; i <allNumbers.length; i++){
//     if (allNumbers[i] % 2 !=1 ){
//         evenNumbers.push(allNumbers[i]);
//     }else{
//         oddNumbers.push(allNumbers[i]);
//     }

// }
// console.log("The even numbers are: " + evenNumbers);
// console.log("The odd numbers are: " + oddNumbers);

//dot notation practice: Pull name, age & relationship  from data 



let Bro = {
    name: "Tyler Davis",
    phone: "609-353-8646",
    age: 30,
    relationship: "brother",
    yearsknown: 30
}

let Mom = {
    name: "Cynthia Davis",
    phone: "609-845-5531",
    age: 53,
    relationship: "mother",
    yearsknown: 34
    
}

let Dad = {
    name: "Selwyn Davis",
    phone: "609-346-3971",
    age: 63,
    relationship: "father",
    yearsknown: 32
}

let Britt = {
    name: "Brittney O'rourke",
    phone: "215-207-3460",
    age: 36,
    relationship: "friend",
    yearsknown: 5
}

let Nai = {
    name: "Janaida Smart ",
    phone: "856-298-3205",
    age: 33,
    relationship: "friend",
    yearsknown: 10
}

let Marcel = {
    name: "Marcel Wood",
    phone: "609-594-0864",
    age: 34,
    relationship: "friend",
    yearsknown: 26
}

let FiveOhFour = {
    name: "Jermaine Jackson",
    phone: "504-547-5388",
    age: 42,
    relationship: "ex-lover",
    yearsknown: 3,
}
let TV ={
    name: "Tved't Lazenby",
    phone: "313-303-2362",
    age: 37,
    relationship: "homie",
    yearsknown: 3
}

let Top8 = [Bro, Mom, Dad, Britt, Nai, Marcel, FiveOhFour, TV]

Bro.name, Bro.age, Bro.relationship;
console.log(Top8[5].age,relationship);

// Britt.name, Britt.age, Britt.relationship;
// console.log(Britt.name, Britt.age, Britt.relationship);

// FiveOhFour.name, FiveOhFour.age, FiveOhFour.relationship;
// console.log(FiveOhFour.name, FiveOhFour.age, FiveOhFour.relationship);

