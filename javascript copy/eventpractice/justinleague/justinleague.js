// function buttonClick() {
//     let cereal = document.getElementsByTagName('body');
//     let button = document.getElementById('button1');
//     button.innerText = "Button was Pressed";
//     button.style.backgroundColor = "green";

//     let newButton = document.createElement("button");
//     newButton.innerText = "Newly created button";
//     cereal[0].appendChild(newButton);

//     console.log(cereal);
//     console.log(button);
// }




bugButton.addEventListener("click", function () {
    bugPopup.classList.add("show");
});
closePopup.addEventListener("click", function () {
    bugPopup.classList.remove("show");
});
minimizePopup.addEventListener("click", function () {
    bugPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target != myPopup) {
        bugPopup.classList.remove("show");
    }
});