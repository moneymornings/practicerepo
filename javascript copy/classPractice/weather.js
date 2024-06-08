let windspeed = 46 ;
 if (windspeed < 5 ) {
    console.log ("slightly windy")

   
  } else if(windspeed < 0 ) {
        console.log ("Illegal value provided")   

 } else if(windspeed >=5 && windspeed <15) {
    console.log ("moderate winds, grab a jacket");

 } else if (windspeed >=15 && windspeed <25){

    console.log("conditions are hazardous");

 } else if (windspeed >= 25) {
    console.log ("wind advisory warning");


 }