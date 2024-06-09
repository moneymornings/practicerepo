// code to use express
const express = require('express');
const app = express();

// code to use body parser to see json in res
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// code to use winston (error logging)
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    // - Write all logs with importance level of `error` or less to `error.log`
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    // - Write all logs with importance level of `info` or less to `combined.log`
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

function clientError (req, message, errorCode) {
  logger.log({
    level: 'info',
    endpoint: req.path,
    method: req.method,
    query: req.query,
    pathParameters: req.params,
    body: req.body,
    ip: req.ip,
    error: errorCode,
    message: message,
    timestamp: new Date().toUTCString(),
  });
}

// code to use pg-promise
const pgp = require('pg-promise')();
const db = pgp("postgres://rrermifn:mJO35jyo0b1v2FSRMCRgXeoc-qFcC8YF@ziggy.db.elephantsql.com/rrermifn");


// Middleware to create a log for every API call 
let clientID = 0;

app.all('/*', (req, res, next) => {
  clientID++;
  logger.log({
    level: 'info',
    endpoint: req.path,
    method: req.method,
    query: req.query,
    pathParameters: req.params,
    body: req.body,
    ip: req.ip,
    timestamp: new Date().toUTCString(),
  });
  next()
    
})

/*
Endpoint:
    GET
*/
app.get('/menu', async (req, res) => {
  if(Object.keys(req.body).length != 0) {
    clientError(req, "Request body is not permitted at this endpoint", 400);
    res.status(400).json({error: "Request body is not permitted at this endpoint"});
  } 
  // Makes sure that client only 4 query param (name, type, region, abilities)
  else if(Object.keys(req.query).length > 1) {
      clientError(req, "Query parameters do not meet the requirements", 400);
      res.status(400).json({error: "Query parameters do not meet the requirements length"});
  } 
  // Makes sure that client put in an ID that is a number
  else if(isNaN(req.query.id) && req.query.id != undefined) {
      clientError(req, "ID is not a number", 400);
      res.status(400).json({error: "ID is not a number"});
  } 
  else {
      if(req.query.all === '') {
          res.json(await db.any('SELECT * FROM food'));
      }
  }
  
});
/*
Endpoint:
    POST
*/

app.post('/food', (req, res) => {
    
});

/*
Endpoint:
    PATCH
*/

app.patch('/food', (req, res) => {
    
});

/*
Endpoint:
    DELETE
*/

app.delete('/food', (req, res) => {

let id = Number(req.params.id);
let remove = await.db.result("DELETE FROM customer_order WHERE ID = $1", id);
console.log(remove);

if(remove.rowcount > 0){
  res.status(200).send(`Order deleted with ID: ${id}`)
}

    
});

// To run server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})