// Functions come in many shapes and sizes

function getBirthdate() {
  //Does some here
}

// Anonymous Function
// () => {
//   console.log("Anonymous function is running");
// };

let randomUser = {}

//deleted the url below

//Fetch is a function that makes an API call
// It takes in the url of the API as its parameter
fetch("") // api for the get request
  // Another example of an anonymous function, response is the parameter for
  // this function, meaning the response from the server will be stored in
  // a variable called response

  // Response.json() converts the response into the JSON format 
  .then((response) => response.json())
  // This .then is the second function called in the promise chain
  // The value stored in the previous function is also passed as 
  // an argument to the next function even without a return statement
  // data now holds the value of response.json()
  .then((data) => console.log(data));