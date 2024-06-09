//Imports express from the node_modules folder
const express = require('express')

const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json

let todos = [];
let number_of_todos = 1;

// GET requests should never have a body

// Returns entire todolist or return a single todo
app.get('/todo', function (req, res) {
    console.log(req.query);
    // Check if a body was provided in the request
} if(Object.keys(req.body).length != 0) {
        res.statusCode = 400;
        res.json({error: "Request body is not permitted"})
    } else if(Object.keys(req.query).length > 1){
        res.statusCode = 400;
        res.json({error: "Query Parameters do not meet requirements"})
    }
        //Ensures no parameter other ant list or id can be passed

        else if((Object.keys(req.query).length !=0)) &&
        (Object.keys(req.query)[0] != "id" && Object.keys(req.query) [0],){
            req.status(400).json({error: "Query Parameters do not meet requirements"})
        }
       

            //Checks to make sure that the id is a number 
            else if(isNaN(req.query.id)) && req.query.id != undefined){
                res.status(400).json({error: "id provided is not a number"})
            }
        // Check if an id was passed from the client, if no, return all todos
        if(req.query.id == undefined){
            res.json({todos});
        }
        // If an id is passed, only one todo will be returned 
        else{
            // Client task is a placeholder to determine if a match was found
            // If no task with the provided ID was found, clientTask will remain
            // and empty object. If a match is found, then the task will be stored
            // inside of the clientTask variable
            let clientTask = {}
            // Searching through the tasklist for a matching id
            for(let i=0; i < todos.length; i++){
                if(todos[i].id == req.query.id){
                    // Match was found, save it to clientTask
                    clientTask = todos[i];
                }
            }
            // Match not found, return error

            //Object.keys() return the object as an array. Every array has a built in
            // lenght property that we can use to check if the array, or in this case
            // object was empty
            if(Object.keys(clientTask).length === 0){
                res.statusCode = 400;
                res.json({error: "Todo with that id not found"})
            } else{
                // Send back matching result
                res.json(clientTask);
            }
        
        }
    }
    
})


//We can obtain information from the client through multiple avenues

/* 1). Query Parameters(?): the client is asking for specific from your server
                            query parameters are almost always exclusive to GET
                            endpoints

   2). Path Parameters(:):  the client is making a change to specific resource within
                            the database. Generally used with POST/PUT/DELETE endpoints

   3). Body:                the client provides the information to change or create an
                            an existing resource within the database

Both query and path parameters can be accessed in javascript using the req(request)
object. i.e req.params

*/

// Adds a single task to the todolist
app.post('/todo', function(req, res) {
    //console.log(req.body.list.length);
    //Check if there is an array called list
        console.log(req.body.list);
        if(req.body.list == undefined){
            // Add a single todo
            todos.push({id: number_of_todos, todo: req.body.todo, completed: false});
            res.json({todo: todos[-1]});
        } else if(req.body.list.length > 0){
            for(let i=0; i < req.body.list.length; i++){
                todos.push({id: number_of_todos++, todo: req.body.list[i].todo, completed: false});
            }
            res.json("Bulk Insert");
    }
    
})

// Updates a todo task
app.put('/todo/:id', (req, res)=> {
    //i need to create a variable for the id = req.params.id
    //create a variable for the completed task = req.body.completed
    //create a forloop to find the corrct id that im trying to target
    let index = req.params.id;
    todos[index].todo = req.body.todo;
    res.json(todos[index]);

    let completedTask = req.body.completed;
    if(res.body.list){
        // Add a single todo
        todos.push({id: number_of_todos, todo: req.body.todo, completedTask: true});
        res.json({todo: todos[-1]});
    } else if(req.body.list.length > 0){
        for(let i=0; i < req.body.list.length; i++){
            todos.push({id: number_of_todos++, todo: req.body.list[i].todo, completedTask: true});
        }
        
}
    // Req.params returns paramters that are passed through the path(url)
    // let index = req.params.id;
    // todos[index].todo = req.body.todo;
    // res.json(todos[index]);
})

//Deletes a task from the todolist
// One person is looking for how to get a parameter from the client
// app.delete('/todo/:id', (req, res)=> {
//     let index = req.params.id - 1;
//     let tempValue = todos[index];
//     todos.splice(index, 1);
//     res.json({todo: tempValue});
// })
app.delete('/todo/', function (req, res) {
    let temp; //add variable to store the deleted todo 

    //Search through the array for a todo that has an id that matches the client's request
    for(let i=0; i<todos.length; i++){
        //checking for id, once the matching id is found delete that id from the array
        if(todos[i].id == req.params.id){
            temp = todos[i];//saving/assigned the deleted value before the its deleted
            todos.splice(i,1);
        }
    }
    res.json(temp);
})
      

// Opens up a port on your computer for the server to listen to
// incoming requests
app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
})