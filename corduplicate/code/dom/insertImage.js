function getWeather() {
    // fetch("https://dog.ceo/api/breeds/image/random")
    //     .then(resp => resp.json())
    //     .then(img => {
    //         let dogImage = document.getElementById("dogImg");
    //         console.log(dogImage.src);
    //         dogImage.src = img.message;
    //     })


    // Mock API Response
    let currentWeather = {
        highTemp: 85,
        lowTemp: 53,
        windSpeed: 8,
        rainChance: 2,
        date: new Date(),
        condition: "cloudy"
    }

    //Create an img tag
    let weatherImage = document.createElement("img");

    if(currentWeather.condition === "sunny") {
        weatherImage.src = "../../assets/sun.png"
    } else if(currentWeather.condition === "cloudy") {
        weatherImage.src = "../../assets/cloudy.png"
    }

    // Adds the img to the body of the webapage
    document.body.appendChild(weatherImage);

}