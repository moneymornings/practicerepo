let express = require('express');

let app = express();

app.get('/', (req, res)=>{
    res.send("We gon learn this API ish")
});

app.get('/todo', (req, res)=>{
    res.send( list = [ 
        {id: 1, task :'wash car'},
        {id: 2, task:'wax wheels'},
        {id: 3, task: 'vaccuum inside'},
        {id: 4, task: 'detail interior'},
    ]);


});

app.get('/todo/:id', (req,res)=>{
    console.log(req.params);


})



app.listen(3000,()=>{
    console.log('Server is running on port Andre 3000 ');


})