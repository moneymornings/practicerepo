const express = require('express');
const pgp = require('pg-promise')();

const app = express(); 
const db = pgp('postgres://fgldmbwi:***@baasu.db.elephantsql.com/fgldmbwi');

//creating endpoint 
app.get('/player', async (req, res) => {

   let endpoint/variable name = await db.any('SELECT * FROM _name of table' )
    res.json(name of endpoint);

})

//GETTING FROM ONE ID 
app.get('/player', async (req, res) => {

    let endpoint/variable name = await db.oneorNone('SELECT * FROM _name of table WHERE id =$1',req.query.id )
     res.json(name of endpoint);
 
 })

// error checking - add before your function 
app.get('/player', async (req, res) => {
    //check to make sure if the body is empty or not - create if statement - we want body to be undefined for get 
    if(req.body != 'undefined'){ //if the body is not undefined (meaning its something there that shouldnt be)
        console.log("received a request with body")
        res.sendStatus(400).statusMessage('BadRequest') //return status and message bad request
    } else{

    let endpoint/variable name = await db.any('SELECT * FROM _name of table' )
    res.json(name of endpoint);

    }
    // to check - go to postman 
    // go to your get endpoint - put something in body 
    

})
    
    
  



app.post('/player', (req, res) => {

})


app.patch('/player', (req, res) => {

})

app.delete('/player', (req, res) => {

})



app.listen(,()=>{
    console.log('Server is running on 3000')
})