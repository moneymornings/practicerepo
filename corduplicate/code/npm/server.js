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
-------------------------------------------------------------------------------------------
*/

//Imports express from the node_modules folder
const express = require('express')
const winston = require('winston')
const pg = require('pg-promise')();
const db = pg("postgres://dretaylor@localhost:5432/postgres");

const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json

// Creating a winston logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
});


let todos = [];
let number_of_todos = 1;
let clientID = 0;

// Create a specified log for client errors
function clientError(req, message, errorCode){
    logger.log({
        level: 'info',
        endpoint: req.path,
        method: req.method,
        query_parameters: req.query,
        path_paramters: req.params,
        body: req.body,
        ip: req.ip,
        error: errorCode,
        message: message,
        timestamp: new Date(),
    });
}

function checkIllegalBodyParams(list){
    for(let i = 0; i < list.length; i++){

    }
}

function checkIllegalPathParams(){

}

function checkIllegalQueryParams(){

}

/*
Middleware: 
    Creates a log for every API call
*/
app.all('/*', (req, res, next)=> {
    clientID++
    logger.log({
        level: 'info',
        endpoint: req.path,
        method: req.method,
        query_parameters: req.query,
        path_paramters: req.params,
        body: req.body,
        ip: req.ip,
        timestamp: new Date(),
    });
    next()
})

/*
Endpoint: 
    returns a list of all todos, if an id is provided, only a single todo is returned
Query Parameters:
    id[number]: the id of the todo
*/
app.get('/todo', (req, res)=> {
    // Check if a body was provided in the request
    if(Object.keys(req.body).length != 0) {
        clientError(req, "Request body is not permitted", 400);
        res.status(400).json({error: "Request body is not permitted"});
    } 
    //Check if more than one query parameter was passed
    //Object.keys() returns the object as an array. Every array has a built in
    // length property that we can use to check if the array, or in this case
    // object was empty
    else if(Object.keys(req.query).length > 1){ 
        clientError(req, "Query Parameters do not meet requirements", 400);
        res.status(400).json({error: "Query Parameters do not meet requirements"});
    }
    // Ensures no parameter other than list or id are passed
    else if((Object.keys(req.query).length != 0) && (Object.keys(req.query)[0] != "id")){
        clientError(req, "Query Parameters do not meet requirements", 400);
        res.status(400).json({error: "Query Parameters do not meet requirements"});
    }
    // Checks to make sure that the id is a number
    else if(isNaN(req.query.id) && req.query.id != undefined){
        clientError(req, "id provided is not a number", 400);
        res.status(400).json({error: "id provided is not a number"});
    }
    // Request format was correct so we can proceed with the request
    else {
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
            if(Object.keys(clientTask).length === 0){
                res.status(400).json({error: "Todo with that id not found"});
            } else{
                // Send back matching result
                res.json(clientTask);
            }
        }
    }
})

/*
Endpoint: 
    Adds a todo to the list. If a list parameter is provided it adds multiple todos in
    one call
Body:
    todo[string](required): the task to be added to the todolist
    list[array]:contains a list of todos
*/
app.post('/todo', (req, res)=> {
    //console.log(req.body.list.length);
    //Check if there is an array called list
        if(req.body.list == undefined){
            // Add a single todo
            todos.push({id: number_of_todos, todo: req.body.todo, completed: false});
            // We can access the last element in an array using -1 as an index
            res.json({todo: todos[-1]});
        } else if(req.body.list.length > 0){
            for(let i=0; i < req.body.list.length; i++){
                todos.push({id: number_of_todos++, todo: req.body.list[i].todo, completed: false});
            }
            res.json("Bulk Insert");
    }
})

/*
Endpoint: 
    Updates an existing todo and modifies its data

Path Parameters:
    id[number](required): the id of the task to be updated in the todolist

Body:
    todo[string]: the task to be updated
    completed[boolean]: the status of the task
*/
app.put('/todo/:id', (req, res)=> {
    // Req.params returns paramters that are passed through the path(url)
    let match;
    for(let i = 0; i < todos.length; i++){
        if(todos[i].id == req.params.id) {
            if(req.body.todo != undefined){
                todos[i].todo = req.body.todo
            }
            if(req.body.completed != undefined){
                todos[i].completed = req.body.completed
            }
        }
        match = todos[i];
    }
    res.json(todos[match]);
})

/*
Endpoint: 
    Deletes an existing todo

Path Parameters:
    id[number](required): the id of the task to be deleted in the todolist
*/
app.delete('/todo/:id', (req, res)=> {
    // Stores the deleted todo
    let temp;
    // Search through the array for a todo that has an id that matches the client's request
    for(let i = 0; i < todos.length; i++){
        // Once the matching id is found delete from the array
        if(todos[i].id == req.params.id){
            temp = todos[i];
            todos.splice(i, 1);
        }
    }
    res.json(temp);
})

// Opens up a port on your computer for the server to listen to
// incoming requests
app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
})