// --------------------------------------------------------------------
// WEATHERAPI.COM
// --------------------------------------------------------------------
//Create a five day weather outlook for a city of your choice. The outlook should include the following:
//High Temp
//Low Temp
//Winds
//Rain Chance
//The day/date of the weather conditions
//Image representing one of the following conditions: sunny, partly cloudy, mostly cloudy, rainy, windy

function  onloadCall() {

fetch("http://api.weatherapi.com/v1/forecast.json?key=f9590783e4ed48ebb8d152028241803&q=Los Angeles &days=5&aqi=no&alerts=no")
.then((response) => response.json())
.then((data) => {
    let LaData = [];
    LaData.push(data);

    for(i=0; i<LaData[0].forecast.forecastday.length; i++){

        let cityName = data.location.name + " "; data.location.region;
        let weatherDate =  data.forecast.forecastday[i].date;
        let highTemp = "High of: " + data.forecast.forecastday[i].day.maxtemp_f;
        let lowTemp = "Low of: " + data.forecast.forecastday[i].day.mintemp_f;
        let Winds = "Wind Speed: " + data.forecast.forecastday[i].day.maxwind_mph;
        let rainChance = "Rain Chance: " + data.forecast.forecastday[i].day.daily_chance_of_rain + "%";
        let Img = data.forecast.forecastday[i].day.condition.icon;
        // console.log(Img);


        let LaDataContainer = document.createElement("div");
        

        let cityNametag = document.createElement("p")
        let weatherDatetag = document.createElement("p");
        let highTemptag = document.createElement("p");
        let lowTemptag = document.createElement("p");
        let Windstag = document.createElement("p");
        let rainChancetag = document.createElement("p");
        let Imgtag = document.createElement("img");
             Imgtag.src = Img;
        // console.log(document.createElement)

        cityNametag.innerText = cityName;
        weatherDatetag.innerText = weatherDate;
        highTemptag.innerText = highTemp;
        lowTemptag.innerText = lowTemp;
        Windstag.innerText = Winds;
        rainChancetag.innerText = rainChance; 
        ImgTag.innerText = Img;


        LaDataContainer.appendChild(cityNametag);
        LaDataContainer.appendChild(weatherDatetag);
        LaDataContainer.appendChild(highTemptag);
        LaDataContainer.appendChild(lowTemptag);
        LaDataContainer.appendChild(rainChancetag);
        LaDataContainer.appendChild(ImgTag);

        document.body.appendChild(LaDataContainer);


        console.log(data);

        
 }

})
}







