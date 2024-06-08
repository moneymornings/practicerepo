// --------------------------------------------------------------------
// WEATHERAPI.COM
// --------------------------------------------------------------------

//Create a five day weather outlook for a city of your choice. The outlook should include the following:
//City name: data.location.name + "," + data.location.region
//High Temp: data.forecast.forecastday[0].day.maxtemp_f
//Low Temp: data.forecast.forecastday[0].day.mintemp_f
//Winds: data.forecast.forecastday[0].day.maxwind_mph
//Rain Chance: data.forecast.forecastday[0].day.daily_chance_of_rain
//The day/date of the weather conditions: data.forecast.forecastday[0].date
//conditionImg: data.forecast.forecastday[0].day.condition.icon
//Image representing one of the following conditions: sunny, partly cloudy, mostly cloudy, rainy, windy
//Each day should be stored in its own container. (edited) 


// // function onloadCall() {
// //     fetch("https://api.weatherapi.com/v1/forecast.json?q=30318&days=5&key=f9590783e4ed48ebb8d152028241803")
// //     .then((response) => response.json())
// //     .then((data) => {
// //         let weatherDatabase = [];
// //         weatherDatabase.push(data); 
// //         // console.log(weatherDatabase);
// //         for(i = 0; i < weatherDatabase[0].forecast.forecastday.length; i++){

// //             //locating data in array
// //             let cityName = data.location.name + ", " + data.location.region;
// //             let weatherDate = data.forecast.forecastday[i].date;
// //             let conditionImg = data.forecast.forecastday[i].day.condition.icon;
// //             let highTemp = "High of: " + data.forecast.forecastday[i].day.maxtemp_f;
// //             let lowTemp = "Low of: " + data.forecast.forecastday[i].day.mintemp_f;
// //             let winds = "Wind Speed: " + data.forecast.forecastday[i].day.maxwind_mph + " mph";
// //             let rainChance = "Rain Chance: " + data.forecast.forecastday[i].day.daily_chance_of_rain + "%";

// //             // console.log("Rain Chance: ", rainChance);


// //             //container
// //             let weatherContainer = document.createElement("div");
// //             //console.log("Newly Created Div: ", weatherContainer);


// //             // tags
// //             let cityNameTag = document.createElement("p");
// //             let weatherDateTag = document.createElement("p");
// //             let conditionImgTag = document.createElement("img");
// //             let highTempTag = document.createElement("p");
// //             let lowTempTag = document.createElement("p");
// //             let windsTag = document.createElement("p");
// //             let rainChanceTag = document.createElement("p");


// //             //Values(.innerText)
// //             cityNameTag.innerText= cityName;
// //             weatherDateTag.innerText = weatherDate;
// //             conditionImgTag.innerText = conditionImg;
// //             highTempTag.innerText = highTemp;
// //             lowTempTag.innerText = lowTemp;
// //             windsTag.innerText = winds;
// //             rainChanceTag.innerText = rainChance;

// //             // console.log("Rain chance tag: ", rainChanceTag);
            

// //             //appendChild
// //             weatherContainer.appendChild(cityNameTag);
// //             weatherContainer.appendChild(weatherDateTag);
// //             weatherContainer.appendChild(conditionImgTag);
// //             weatherContainer.appendChild(highTempTag);
// //             weatherContainer.appendChild(lowTempTag);
// //             weatherContainer.appendChild(windsTag);
// //             weatherContainer.appendChild(rainChanceTag);

// //             // console.log("Div with p tags: ", weatherContainer);

// //             document.body.appendChild(weatherContainer);


// //         }

// //         console.log(data);

// //     })

// }