function getUsers() {
    // Call the Random User API
    fetch('https://randomuser.me/api/?results=20')
    .then(resp => {
        return resp.json();
    })
    .then(user => {
        console.log(user);
        for(let i = 0; i < user.results.length; i++) {
            // Create container for detailed user view
            let detailedContainer = document.createElement("div");
            detailedContainer.classList.add("card");

            // Create an image element for a user
            let userImage = document.createElement("img");

            // Create a p tag for each relevant piece of user info
            let nameTag = document.createElement("p");
            let genderTag = document.createElement("p");
            let emailTag = document.createElement("p");
            let phoneTag = document.createElement("p");


            // Add the values for gender, email, and phone to our newly created tags
            genderTag.innerText = user.results[i].gender;
            emailTag.innerText = user.results[i].email;
            phoneTag.innerText = user.results[i].phone;
            nameTag.innerText = user.results[i].name.first + " " + user.results[i].name.last;;

            // Add user image
            userImage.src = user.results[i].picture.thumbnail;

            // Append each of our p tags to the div container
            detailedContainer.appendChild(userImage);
            detailedContainer.appendChild(nameTag);
            detailedContainer.appendChild(genderTag);
            detailedContainer.appendChild(emailTag);
            detailedContainer.appendChild(phoneTag);
            

            // Finally we add the entire container to the body
            document.body.appendChild(detailedContainer);
            
        }
    })
}