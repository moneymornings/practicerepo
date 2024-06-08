
let userlogins = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password1",
    address: "123 Main St",
    zip_code: "12345",
    phone_number: "123-456-7890",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "password2",
    address: "456 Elm St",
    zip_code: "23456",
    phone_number: "234-567-8901",
  },
  {
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    password: "password3",
    address: "789 Oak St",
    zip_code: "34567",
    phone_number: "345-678-9012",

    name: "Mario Forbes",
    email: "mario.forbes@example.com",
    password: "password4",
    address: "5 Orion Way",
    zip_code: "29241",
    phone_number: "315-270-1010",

    name: "Lolita Vera",
    email: "lolita.veran@example.com",
    password: "password5",
    address: "215 Canary Rd",
    zip_code: "69012",
    phone_number: "267-990-1112",
  },
];

function getEmail() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  
  let InputEmail = email.value;
  let InputPassword = password.value;
  // let InputName = [];

  console.log("Email: ", InputEmail);
  console.log("Password: ", InputPassword);

  for (let i = 0; i < userlogins.length; i++) {
    let user = userlogins[i]
    if (user.email === email.value && user.password === password.value) {
      console.log("Logged In");
      break;
      
    } else {
      
      alert( "Invalid LogIn")
      console.log("Failed");
      
    }
  }
  

}

// Check Login verification
// Create array for all users
//Create loop to check for verified users
//Using the above array, validate if the email and password is a user.
//If the fields matches any of the users in the array, print logged in once the button is click.
//If it does not match print failed.


// function validateSignUp() {
// }



