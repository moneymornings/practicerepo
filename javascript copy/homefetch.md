How to fetch an API Call in javascript & print selected data onto a webpage 

Part 1: Getting your API Call URL 
Step one : go to the api website -> copy the API KEY 
Step two: go to your api explorer or wherever you can obtain/edit the parameters of your api call 
Step three: Edit your parameters as needed 
Step four: Get response 
Step five: Check your response, and copy the call 

Part 2: Setting up your API Call in Javascript 
Step one: Create your javascript, html, and css files 

Step two: Go to Javascript ---> Set up your Fetch : see below

fetch( "apiURL")
.then((response) => response.json())
.then((data))

Step three: gather all the paths for the data you need to pull : see below 

//Create a five day weather outlook for a city of your choice. The outlook should include the following:
//City name: data.location.name + "," + data.location.region
//High Temp: data.forecast.forecastday[0].day.maxtemp_f
//Low Temp: data.forecast.forecastday[0].day.mintemp_f
//Winds: data.forecast.forecastday[0].day.maxwind_mph
//Rain Chance: data.forecast.forecastday[0].day.daily_chance_of_rain
//The day/date of the weather conditions: data.forecast.forecastday[0].date

// Use Data notation to locate data in array
        Set variable = to path 
            let cityName = data.location.name + ", " + data.location.region;
            let weatherDate = data.forecast.forecastday[i].date; ---when you get to a new array you must add [i]
            let conditionImg = data.forecast.forecastday[i].day.condition.icon;
            let highTemp = "High of: " + data.forecast.forecastday[i].day.maxtemp_f;
            let lowTemp = "Low of: " + data.forecast.forecastday[i].day.mintemp_f;
            let winds = "Wind Speed: " + data.forecast.forecastday[i].day.maxwind_mph + " mph";
            let rainChance = "Rain Chance: " + data.forecast.forecastday[i].day.daily_chance_of_rain + "%";

Step four: create an additional array to push your selected data into  and place it under the fetch : see below 


let WeatherDatabase = []
WeatherDatabase.push(data);

Step five: create a for loop 

Step six: create a container for the selected information 
           set it =  to document.createElement("div")
: see below 
let weatherContainer = document.createElement("div")

Step seven: create P tags for the content that will be inside of the div 
            use the variables from the array you created 
: see below
let cityNameTag = document.createElement("p");
let WeatherDateTag = document.createElement("p");
etc..

Step eight: Create values/inner.text for your P tags  
            Set tag + .innertext = to variable name 
: see below 
CityNameTag.innerText = cityName;
WeatherDateTag.innerText = conditionImg;
highTempTag.innerText = highTemp;

Step nine: Append your tags inside of the div
        Use dot notation 
        container.appendChild(cityNameTag);
        container.appendChild(weatherDateTag);
        etc etc....


Step ten: Connect the document to the body/appendChild to container 
        use dot notation and connect it to appendchild and container
        document.body.appendChild(weatherContainer);


Step eleven: Print data 

console.log(data);


Part 3: HTML

Step twelve: Create an eventlistener in html that will connect to a function in your javascript
            This event listener will trigger the api call 

Step thirteen: Create a function in javascript that matches the eventlistener in html



Part 4 CSS
    



