document.body.addEventListener('dblclick', function(event) {
    console.log('You activated my trap card! \n<(^_^)<Double click virus has been activated>(^_^)>');

    alert('You activated my trap card! \n<(^_^)<Double click virus has been activated>(^_^)>');


});

function btnClick() {
    console.log('Button has been clicked')
    let btnColor = document.getElementById("review-btn");
    btnColor.style.backgroundColor = 'green';
}

function alertForm(event) {
    event.preventDefault();
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    let radioButtonValue;
    const radioButtons = document.getElementsByName('fav_language');
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            radioButtonValue = radioButton.value;
            break;
        }
    }
    const checkBoxValues = [];
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkBoxes.forEach(checkbox => {
        checkBoxValues.push(checkbox.value);
    });
    const alertMessage = `First Name: ${firstName}\nLast Name: ${lastName}\nFavorite Language: ${radioButtonValue}\nVehicles: ${checkBoxValues.join(', ')}`;
    alert(alertMessage);
}


function apiCall() {
    fetch('https://api.chucknorris.io/jokes/random?category=sport')
        .then(response => response.json())
        .then(data => {
            console.log('Data received:', data);
            alert(data.value);
        });
}

let heading = document.getElementById('heading');
let changeHeadingBtn = document.getElementById('changeHeadingBtn');

changeHeadingBtn.addEventListener('click', function() {
    heading.textContent = 'New Heading Review';
});


let container1 = document.getElementById('container')
container1.style.backgroundColor = 'yellow';

let children = document.createElement('p');
children.setAttribute('class', 'dom-child');
children.innerText = 'DOM Child';
children.style.backgroundColor = 'red';

container1.appendChild(children);

// let liChildren = document.querySelectorAll('.review-li');
// for(let i = 0; i < liChildren.length; i++){
//     liChildren[i].style.backgroundColor = 'red';
// };

let liChildren = document.getElementsByTagName('li');
for(let i = 0; i < liChildren.length; i++){
    liChildren[i].style.backgroundColor = 'red';
};

let dogPic = document.createElement('img');
dogPic.src = 'https://source.unsplash.com/random/300x250';

container1.appendChild(dogPic);

console.log("testing this in code" + container1);