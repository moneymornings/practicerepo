const express = require('express');
const pgp = require('pg-promise')();

const app = express();
const db = pgp('postgres://xhxlsqqe:CGg6bqFvaHW0UORi3CKSPGP5Y0YfMwh7@batyr.db.elephantsql.com/xhxlsqqe');



app.get('/players', async (req, res)=> {
    // Check to make sure GET request does not have a body
        let player = await db.oneOrNone('SELECT * FROM nba_players WHERE id = $1', req.query.id);
        res.json(player);
})

app.get('/players', async (req, res)=> {
    // Check to make sure GET request does not have a body
    if(req.body != 'undefined'){
        res.status(400).json('Bad Request');
    } else {
        let players = await db.any('SELECT * FROM nba_players');
        res.json(players);
    }
})



app.post('/players', (req, res)=> {
    
})


app.patch('/players', (req, res)=> {
    
})


app.delete('/players', (req, res)=> {
    
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})