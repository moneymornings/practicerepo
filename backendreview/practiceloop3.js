const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch",
        ]

      }

    ];

    //Print the last value in both arrays 

    for(a=0; a < myPlants.length; a++){

        const plants = myPlants[a];

        // console.log(myPlants[1].list[2])
        // console.log(myPlants[0].list[2])

     for(b=0; b < plants.length; b++){

        const everyPlant = plants[b].type.list;

        // if(everyPlant[0].list[2] === 'd'){ // if family member first name starts with D print to console
            console.log(everyPlant)
         }
        
           

           
     }
    

  