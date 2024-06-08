//Create a function that connects to your event listener function 

function buttonClick(){
    let podcast = document.getElementsByTagName("body");
    //create variable and connect it to your html by using document.
    //connects it to DOM Document - getElementbytagname() - which connects the button id
    // Takes the html element, converts the element into a object
  // and stores that object into a variable

    let button = document.getElementById("button1");
    button.innerText = "Button was pressed";
    button.style.backgroundColor = "red";

    let newButton = document.getElementById("button");
    newButton.innerText = "Newly Created Button";
    podcast[0].appendChild(newButton);

    console.log(podcast);
    console.log(button);


}