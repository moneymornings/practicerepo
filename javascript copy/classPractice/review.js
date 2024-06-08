// Organize your TOP 6 in your imessage application

//Name, Phone Number, Age, Relationship, Yrs Known 

//create an array for the original 6 ,then add an additional person to the array afterwards

// now access your Top6's name and ages using dot.notation 

//add a random generated id number to the object

// 

//organize them by oldest to youngest.


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

let TOP6 = [Bro, Mom, Dad, Britt, Nai, Marcel];
// console.log(TOP6);
// TOP6.push(FiveOhFour);
// console.log(FiveOhFour);
// TOP6.push(TV);
// console.log(TV);





// let id = Math.floor(Math.random() * 100);

// for(let i = 0; i< TOP6.length; i++){
//     let id = Math.floor(Math.random() * 100)
//     console.log(TOP6[i],"id: ", id);
// }

// let sortTOP6 = [];
// let length = TOP6.length;

// function  sorted(){
//     let length = TOP6.length;

//     for(let j = 0; j < TOP6.length; j++) {
//        for(let k = j +1; k < length; k++){
//         let a = 0;

//        }
        
//         if(TOP6[j] > TOP6[j]) {
//             a = TOP6[j];
//             TOP6[j] = TOP6[k];
//             TOP6[j] = a;


           


//         }

//     }
//         sortTOP6.push(TOP6[j])
// }

// console.log("sorted array is : " + sortTOP6);



for(let i= 30; i<TOP6.length; i++){
    console.log(TOP6[i].age);
}






















// Bro.name, Bro.age
// console.log(Bro.name, Bro.age)
// Mom.name, Mom.age
// console.log(Mom.name, Mom.age)
// Dad.name, Dad.age
// console.log(Dad.name, Dad.age)
// Britt.name, Britt.age
// console.log(Britt.name, Britt.age)
// Nai.name, Nai.age
// console.log(Nai.name, Nai.age)
// Marcel.name, Marcel.age
// console.log(Marcel.name, Marcel.age)
// FiveOhFour.name, FiveOhFour.age
// console.log(FiveOhFour.name, FiveOhFour.age)
// TV.name, TV.age
// console.log(TV.name, TV.age);


