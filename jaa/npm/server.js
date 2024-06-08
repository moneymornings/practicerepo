const pgp = require('pg-promise')();
const db = pgp("postgres://fgldmbwi:***@baasu.db.elephantsql.com/fgldmbwi");
const express = require('express')
const app = express()
const port = 5001
app.use(express.json());



app.get('/', (req, res) => {
    
    res.json({ });
});

app.post('/', (req, res) => {
    res.json({ });
});

app.put('/', (req, res) => {
    res.json({  });
});

app.delete('/', (req, res) => {
    res.json({  });
});


















app.listen(port, () => {
    console.log("server is running on port 5001")
  })
