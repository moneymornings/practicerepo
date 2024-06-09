function buttonClick() {
    let bug = document.getElementsByTagName('body');
    let button = document.getElementById('button1');
    button.innerText = "You've been bug man'd";
    button.style.backgroundColor = "red";

    let newButton = document.createElement("button");
    newButton.innerText = "Ant man 3 was very disappointing";
    bug[0].appendChild(newButton);

    // document.getElementById('img')
    //     .style.display = "block";
    // document.getElementById('button1')
    //     .style.display = "none";

    console.log(bug);
    console.log(button);

}
