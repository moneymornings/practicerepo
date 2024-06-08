let cityWeather = [
    {
        cityName: "New York",
        weatherDetails: {
            temperature: {
                temps: [20, 22, 18, 21]
            },
            windSpeed: 10,
            chanceOfRain: 30,
            humidity: 50
        }
    },
    {
        cityName: "London",
        weatherDetails: {
            temperature: {
                temps: [15, 17, 14, 16]
            },
            windSpeed: 8,
            chanceOfRain: 40,
            humidity: 60
        }
    },
    {
        cityName: "Tokyo",
        weatherDetails: {
            temperature: {
                temps: [25, 27, 23, 26]
            },
            windSpeed: 12,
            chanceOfRain: 20,
            humidity: 55
        }
    }
];

for (let i = 0; i < cityWeather.length; i++) {//loopsfor the first array 
    let cityName = cityWeather[i].cityName;//create variable for cityName so that you can use it in your nested forloop
    let temperatures = cityWeather[i].weatherDetails.temperature.temps;//create variable for temps 

    console.log(`City: ${cityName}`);
    console.log(`Temperatures:`);
    for (let j = 0; j < temperatures.length; j++) {//goes through the inner array of temps
        console.log(`- ${temperatures[j]}°C`);
    }
    console.log("---------------------------");
}



for (let k =0; k<cityWeather.length; i++){//iterates through first array
    console.log(cityWeather[i].name)//prints out cityName

    console.log(cityWeather[i].weatherDetails.windSpeed)



}






const data = {
    "teams": [
        {
            "name": "Team A",
            "members": [
                {
                    "name": "Alice",
                    "role": "Engineer"
                },
                {
                    "name": "Bob",
                    "role": "Designer"
                }
            ]
        },
        {
            "name": "Team B",
            "members": [
                {
                    "name": "Charlie",
                    "role": "Manager"
                },
                {
                    "name": "David",
                    "role": "Developer"
                }
            ]
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    const teamContainer = document.getElementById('teamContainer');

    for (let i = 0; i < data.teams.length; i++) {
        const team = data.teams[i];
        const teamHeading = document.createElement('h2');
        teamHeading.textContent = `Team: ${team.name}`;
        teamContainer.appendChild(teamHeading);
        
        const memberList = document.createElement('ul');

        for (let j = 0; j < team.members.length; j++) {
            const member = team.members[j];
            const memberListItem = document.createElement('li');
            memberListItem.textContent = `${member.name}, ${member.role}`;
            memberList.appendChild(memberListItem);
        }

        teamContainer.appendChild(memberList);
    }
});