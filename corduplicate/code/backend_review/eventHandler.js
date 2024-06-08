async function getDatabaseInfo(){
    // Get the players from the database 
   let playerList = await fetch('http://localhost:3000/player')
   // Get the html element that should hold the database data
   let htmlList = document.getElementById('displayData')
   // Set the players in the html list
   htmlList.innerText(playerList[0])
}