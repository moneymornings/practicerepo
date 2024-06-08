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

    
// function getBirthdates(users) {
//     let i = 0;
//     while(i < users.length) {
//         let date = new Date (users[i].birthday);
//         let month = date.getMonth()+1;
//         let yr = date.getFullYear();
//         if (yr <= 1989) {
//             // console.log(users[i].name);
//         users[i].id = i + 1
//         i++;
//     }
//     console.log(users);
// }

// }

// getBirthdates(userAccounts);

let more
function getRandom(int) {
      let i = 0;
        while(i < userAccounts.length) {
            userAccounts[i].id = generateNewId;
            let id = Math.floor(Math.random() * 10000000);
            i++;
            console.log(userAccounts,id); 
        }          

    }

getRandom();