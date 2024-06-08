//1. Using the random user generator, create a phone book of users.
//2. Use fetch to grab 20 users from the API https://randomuser.me/documentation#howto
//3. Add each user to an array that you create that only holds their first name, last name, phone number, street address, and a photo of them
//4. Create a webpage that displays a contact card for each user displaying the aforementioned data
//5. Deploy the website

let randomUser = {}

fetch("https://randomuser.me/api/?results=20")

.then ((response) => response.json() )

.then((data) => randomUser.name = data.firstName = data.results[0].name.first)
console.log();

// for(i=0, i<contact.length; i++;){
//     console.log()
// }



// let contact = []
// firstname.push(contact[i]);
// lastname.push(contact[i]);
// phone.push(contact[i]);
// location.push(contact[i]);
// picture.push(contact[i]);