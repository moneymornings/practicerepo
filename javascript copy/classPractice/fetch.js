//standard function 

// function getBirthdate(){

// }


//Anonymous funtion - no name, cannnot be called, computer runs as is 
// () => {
//     console.log("anonymous function is running");
// }


// function fetch(response){
// console.log(response);

// };

let randomUser = {}
//Fetch is the function that makes an API call in Javascript.

fetch("https://randomuser.me/api/?results") // insert api 'url' for the get request

//Another example of an anonymous function response is the parameter for 
//this function, meaning the response from ther server will be stored in 
//a variable called response

//Response.json() converts the response into the JSON format --- response can be any variable you would like it to be 
.then((response) => response.json()) //(this line converts it into an object) anything after the arrow is code to be run --  .json converts the data into javascript language
// The second .then is the second function called in the promise chain 
// the value stored in the previous function is also passed as an 
//argument to the next function even without a return statement
//data now holds the value of response.json
//.json is being passed to the next line (data)
.then((data) => randomUser.name = data.firstName = data.results[0].name.first)  //this line prints the object/data
console.log(data);
// console.log( data ); - to check first
//need to use loop when searching for  multiple elements

