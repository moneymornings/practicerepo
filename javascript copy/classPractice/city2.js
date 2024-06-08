let LaWeather = {

    "data": {
        "time": "2024-03-08T18:50:00Z",
        "values": {
            "cloudBase": 0.34,
            "cloudCeiling": null,
            "cloudCover": 19,
            "dewPoint": 52.48,
            "freezingRainIntensity": 0,
            "humidity": 75,
            "precipitationProbability": 0,
            "pressureSurfaceLevel": 29.69,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            "temperature": 60.58,
            "temperatureApparent": 60.58,
            "uvHealthConcern": 2,
            "uvIndex": 5,
            "visibility": 9.94,
            "weatherCode": 1100,
            "windDirection": 216.13,
            "windGust": 2.66,
            "windSpeed": 1.96
        }
    },
    "location": {
        "lat": 34.05369186401367,
        "lon": -118.24276733398438,
        "name": "Los Angeles, California, United States",
        "type": "administrative"
    }
    
   
    
        
    }
    
    let LaHours = {
        
            "data": {
                "timelines": [
                    {
                        "timestep": "1h",
                        "endTime": "2024-03-08T22:00:00Z",
                        "startTime": "2024-03-08T18:00:00Z",
                        "intervals": [
                            {
                                "startTime": "2024-03-08T18:00:00Z",
                                "values": {
                                    "temperature": 59.23
                                }
                            },
                            {
                                "startTime": "2024-03-08T19:00:00Z",
                                "values": {
                                    "temperature": 61.2
                                }
                            },
                            {
                                "startTime": "2024-03-08T20:00:00Z",
                                "values": {
                                    "temperature": 61.62
                                }
                            },
                            {
                                "startTime": "2024-03-08T21:00:00Z",
                                "values": {
                                    "temperature": 60.61
                                }
                            },
                            {
                                "startTime": "2024-03-08T22:00:00Z",
                                "values": {
                                    "temperature4hrs": 60.62,
                                }
                            }
                        ]
                    }
                ]
            }
        }

    


    let LosAngeles = 
    { 

    }

    LosAngeles.temperature = LaWeather.data.values.temperature;
    LosAngeles.uvIndex = LaWeather.data.values.uvIndex;
    LosAngeles.windSpeed = LaWeather.data.values.windSpeed;
    LosAngeles.precipitationProbability = LaWeather.data.values.precipitationProbability;
    LosAngeles.windDirection = LaWeather.data.values.windDirection;

    // console.log(LosAngeles);

    // add temperature4hrs to LosAngeles object 
    //pull temparature4hrs from lahrs and add it losangeles

    // LaHours.data.timelines[5].temperature4hrs;
    // console.log(timelines[5].temperature4hrs);


    LosAngeles.temperature4hrs = LaHours.data.timelines.values.temperature4hrs;
    console.log(LosAngeles);


    // let temp4 =