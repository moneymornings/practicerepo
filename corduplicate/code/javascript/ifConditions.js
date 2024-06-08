// Check the forecast for this week in Atlanta. Take the average windspeed and print out one of the following sentences. 
// If the windspeed is less than 5mph then print slightly windy , if the mph is 5-15 mph the print moderate winds, grab a jacket, if mph is 15-25 print conditions are hazardous,
// anything above 25 mph print wind advisory warning

let windspeed = 12.4;

if(windspeed < 0) {
    console.log("Illegal value provided");
} else if(windspeed < 5) {
    console.log("slightly windy");
} else if(windspeed >= 5 && windspeed < 15) {
    console.log("Moderate winds, grab a jacket");
} else if(windspeed >= 15 && windspeed < 25) {
    console.log("conditions are hazardous");
} else if (windspeed >= 25) {
    console.log("wind advisory warning");
}

