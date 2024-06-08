// let isTodaythursday = [true, false, false, true, false ];

// for(let i = 0; i < isTodaythursday.length; i++) {
//     if(isTodaythursday [i]=== true){
//         console.log(i) 
//     }
    
// }



// let bool = [true, false, false, true, true, false,];

// let i = 0;
// while(i < bool.length) {
//     if(bool[i] === true) {
//         console.log(i);
//     }
//     i++; 
// }


let userAccounts= [
    {
    name: "John Doe",
    birthday: "05/24/1974",
    email: "john@email.com"
},  {
    name: "Ashley Jones",
    birthday: "07/09/1986",
    email: "Ashley@email.com"
},  {
    name: "Mike Brown",
    birthday: "11/12/2004",
    email: "mike@email.com"
}, {
    name: "Jake Smith",
    birthday: "12/03/1999",
    email: "jake@email.com"
},
]


//create the function for bdays/users
function getBirthdates(users) {
    //initialize 
    let i = 0;
    let id = Math.ceil(Math.random() * 7)
    while(i < users.length) {
    //converts a string to a new date//
        let date = new Date (users[i].birthday);
        //create a variable for month// 
        let month = date.getMonth()+1;
        //create a variable for year//
        let yr = date.getFullYear();
        //create a if statement for bdays with yrs less than 89'//
        if (yr <= 1989){
            //prints the users birthdays that apply//
            console.log(users[i].name);
        }
            //complete the loop with the increment//
        i++;
    }
}


getBirthdates(userAccounts);



// function getBirthdates(users){
//     let i = 0;
//     while( i < users.length){
//         console.log(users[i].birthday)
//         i++;
//     }
   
// }

// getBirthdates(userAccounts)