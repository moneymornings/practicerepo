//We can obtain information from the client through multiple avenues

/* 1). Query Parameters(?): the client is asking for specific data from your server
                            query parameters are almost always exclusive to GET
                            endpoints

   2). Path Parameters(:):  the client is making a change to a specific resource within
                            the database. Generally used with POST/PUT/DELETE endpoints

   3). Body:                the client provides the information to change or create an
                            an existing resource within the database

Both query and path parameters can be accessed in javascript using the req(request)
object. i.e req.params
*/
//-------------------------------------------------------------------------------------------//


//Imports express & winston from the node_modules folder
const express = require('express');
const winston = require('winston');
const SwaggerUI = require('swagger-ui')


const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json


const logger = winston.createLogger({
    level: 'info', // there are 7-8 levels of logs - see levels in documentation 
    format: winston.format.json(),//all logs will be in json(objects)
    transports: [ // this array tells us where the logs will be written to when they occur
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),//writes all errors to a file called error.log
      new winston.transports.File({ filename: 'combined.log' }),//everything will be combined and written in this log.
    ],
  });

let todos = []; //created an empty array for todos
let number_of_todos = 1; //created a variable for # of todos starting at 1
let clientID = 0; //created variable for API calls - unique id for api call- for tracking

function clientError(req, message, errorCode){ // this function passes and logs the client error message & statusCode
    logger.log(logger.log({
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
    }))
}

   /*--Documentation--//

Middleware: 
    Creates a log for every API call
*/

app.all('/*', (req, res, next)=> {
    clientID++ //increments the clientID
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

// GET requests should never have a body//


/*--Documentation--//

Endpoint: (What does the endpoint do)
    returns a list of all todos, if an id is provided, only a single todo is returned

Query Parameters: (What parameters to include)
    id[number]: the id of the todo
*/

//Object.keys() returns the object as an array. Every array has a built in
 // length property that we can use to check if the array, or in this case
// object was empty

// Returns entire todolist or return a single todo
app.get('/todo', (req, res)=> {
    // 1. Check if a body was provided in the request
    if(Object.keys(req.body).length != 0) {
        clientError(req, "Request body is not permitted", 400); //clientError function passes the following log (request, error message, error status code) 
        res.status(400).json({error: "Request body is not permitted"}); //this returns the  actual error status code res.status(status code).json({error: "Request body is not permitted"});
    } // to check: in postman in GET type a todo in the body of the GET & check error response, make sure to delete after checking

    // 2. Check if more than one query parameter was passed
    else if(Object.keys(req.query).length > 1){  // 
        clientError(req, "Query Parameters do not meet requirements", 400); // return clientError function passes the following log (request, error message, error status code)
        res.status(400).json({error: "Query Parameters do not meet requirements"});//this returns the  actual error status code res.status(status code).json({error:"Query Parameters do not meet requirements"});
    } //  to check: in postman in GET go to params, add more than one and check error response, make sure to remove params after checking

    // 3. Ensures no parameter other than id is passed
    else if((Object.keys(req.query).length != 0) && (Object.keys(req.query)[0] != "id")){ // if the data in the object of the query request is not = 0 & is not = to the string id
        clientError(req, "Query Parameters do not meet requirements", 400); // return clientError function passes the following log (request, error message, error status code)
        res.status(400).json({error: "Query Parameters do not meet requirements"});//this returns the  actual error status code & message
    } //to check: in postman in GET go to params and add a parameter that is not an id


    // 4. Checks to make sure that the id is a number
    else if(isNaN(req.query.id) && req.query.id != undefined){ //if the query request id is not a number and it is not = to  undefined
        clientError(req, "id provided is not a number", 400); //return clientError function passes the following log (request, error message, error status code)
        res.status(400).json({error: "id provided is not a number"});// this returns the actual error status code and message
    }// to check: in postman in GET go to params and test


    // Everything in the Request format was correct so we can proceed with the request
    else {
        // Check if an id was passed from the client, if not, return entire todo list
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
                if(todos[i].id == req.query.id){ //if the index of the id matches the requested id 
                    // Match was found, save it to clientTask
                    clientTask = todos[i];
                }
            }
            // Match not found, return error
            if(Object.keys(clientTask).length === 0){ //if no match is found, and nothing gets stored in the client task placeholder
                clientError(req, "Todo with that id not found", 400);
                res.status(400).json({error: "Todo with that id not found"});//return the actual status code & error message
            } else{
                // Send back matching result
                res.json(clientTask);
            }
        }
    }
})

/*--Documentation--//

Endpoint: (What does the endpoint do)
    Adds a todo to the list. If a list parameter is provided it adds multiple to dos in one call

Body: 
    todo[string](required): the task to be added to the todolist
    list[array]:contains a list of todos
*/
//POST needs a body to operate//
app.post('/todo', (req, res)=> {
    if(Object.keys(req.query).length > 1){
        clientError(req, "Query Parameters do not meet requirements", 400);
        res.status(400).json({error: "Query Parameters do not meet requirements"});
    } else if((Object.keys(req.query).length != 0) && (Object.keys(req.query)[0] != "id")){
        clientError(req, "Query Parameters do not meet requirements", 400);
        res.status(401).json({error: "Query Parameters do not meet requirements at all!!!"});
    } else if(isNaN(req.query.id) && req.query.id != undefined){
        clientError(req, "id provided is not a number", 400);
        res.status(401).json({error: "id provided is not a number"});
    
    } else if(Object.keys(req.params.id).length != "id"){ //if no match is found, and nothing gets stored in the client task placeholder
        clientError(req, "Cannot Change iD", 400);
        res.status(400).json({error: "Cannot Change iD"});

    }



   // console.log(req.body.list.length);
    //Check if there is an array called list
        if(req.body.list == undefined){
            // Add a single todo
            todos.push({id: number_of_todos++, todo: req.body.todo, completed: false});
            // We can access the last element in an array using -1 as an index
            res.json({todo: todos[-1]});
        } else if(req.body.list.length > 0){
          for(let i=0; i < req.body.list.length; i++){
                todos.push({id: number_of_todos++, todo: req.body.list[i].todo, completed: false});
            }
  
                  }    res.json("Bulk Insert");
})



    /*--Documentation--//

Endpoint: (What does the endpoint do)
    Updates an existing to do and modifies its data

Path Parameters: 
    id[number](required): the id of the task to be updated to othe todolist

Body: 
    todo[string]:the task to be updated
    completed[boolean]: the status of the task 

*/
// Updates a todo task
app.put('/todo/:id', (req, res)=> {
    if(Object.keys(req.query).length > 1){
        clientError(req, "Query Parameters do not meet requirements", 400);
        res.status(400).json({error: "Query Parameters do not meet requirements"});
    } else if((Object.keys(req.query).length != 0) && (Object.keys(req.query)[0] != "id")){
        clientError(req, "Query Parameters do not meet requirements", 400);
        res.status(401).json({error: "Query Parameters do not meet requirements at all!"});
    } else if(isNaN(req.query.id) && req.query.id != undefined){
        clientError(req, "id provided is not a number", 400);
        res.status(401).json({error: "id provided is not a number"});
    }
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



   /*--Documentation--//

Endpoint: (What does the endpoint do)
    Deletes an existing to do 

Path Parameters: (URL path )
    id[number](required): the id of the task to be updated to othe todolist

*/

//Deletes a task from the todolist
// One person is looking for how to get a parameter from the client



app.delete('/todo/:id', (req, res) => {
    // console.logs
    // store the data to be returned to the user after
    let temp;
    // Search through the array till we find the correct ID
    if (Object.keys(req.body).length != 0) {
        clientError(req, "Request has something in the body", 400)
        res.status(400).json({error: "invalid body"}); 
    // Checking the ID is a number
    }   else if(isNaN(req.params.id)){
        clientError(req, "ID parameter is not a number", 400)
        res.status(400).json({error: "invalid id input"});
        } else { 
                for(let i = 0; i < todos.length; i++){
                    console.log(i),
                    console.log(todos[i])
                    // Had to move temp outside of if statement so loop checks individual ID
                    temp = todos[i]
                    // Find matching ID
                    if(todos[i].id == req.params.id){
                            todos.splice(i, 1)
                            res.json(temp);
                        }
                    }
                    // Must be invalid ID
                    if(temp != req.params.id){
                            clientError(req, "invalid id", 400)
                            res.status(400).json({error: "invalid id"})
                        }
                       
            }
    
})

// Opens up a port on your computer for the server to listen to
// incoming requests
app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
})