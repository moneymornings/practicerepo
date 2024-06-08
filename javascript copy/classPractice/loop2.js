let teams = [ 
    {
    name: "Braves",
    city: "Atlanta",
    state: "GA",
    avgAttendance: 39401,
},
    {
        name: "Reds",
        city: "Cincinatti",
        state: "OH",
        avgAttendance: 25164,
      },
      {
        name: "Yankees",
        city: "New York City",
        state: "NY",
        avgAttendance: 40862,
      },
      {
        name: "Red Sox",
        city: "Boston",
        state: "MA",
        avgAttendance: 32989,
      },
    ];

     
   
    for (let i = 0; i < teams.length - 1; i--) {
        console.log("Current team: ", teams[i].name);
        console.log("Next team: ", teams[i + 1].name);
        console.log("Next to Last team: ", teams[i + 3].name);
        console.log("Last team:  ", teams[ i + 2].name)
     }
        


        