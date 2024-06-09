//Complete the todo list using the CRUD requirements (Create, Read, Update, Delete). 
//Each todo list api should have the ability to update an existing task, 
//delete an existing task, and add more than one task at a time

// const express = require('express')

// const app = express()
// app.use(express.json())
//  //for parsing application/json

// let todos = [];
// let number_of_todos = 1;
// // let updatedTaskIndex = [];
// // let deleteNumber =[];

// //Returns entire todolist
// app.get('/', function (req, res) {
//   res.json({todos});
// })


// // app.patch('/patch', function(req, res){
// //   updatedTaskIndex.push(req.body.taskNumber);
// //   todos.push(req.body.updatedTask);
// //   todos.splice(updatedTaskIndex[0] - 1, 1, todos[todos.length - 1 ]);
// //   todos.splice(todos.length - 1, 1)
// //   updatedTaskIndex.splice(0,1)
// //   res.json(todos);
// //   console.log(updatedTaskIndex);
// //   console.log(todos);
// // })

// //Updates multiple to do tasks


// //Updates to do task
// app.put('/todo/:id',(req, res) =>)
// let index = req.params.id -1;
// todos[index].todo =req.body.todos;


// //Deletes Task from the todo list
// //one person looking for how to get a parameter from client
// app.delete('/todo'/:id (req, res) => {
// let index = 2;
// let tempValue = todos[index];
// todos.splice(index,1);
// res.json({tempValue});
// console.log(req.params.id)
// })

// // app.delete('/delete', function(req, res) {
// //   deleteNumber.push(req.body.deleteTask);
// //   todos.splice(deleteNumber[0] - 1, 1);
// //   res.json(todos);
// //   console.log(deleteNumber);
// //   console.log(todos)
// //   // console.log(number_of_todos);
// // })

// // adds a single task to the todo list 
// app.post('/todo',function(req, res ) {

//     console.log(req.body, "before push")
//     todos.push({id:number_of_todos, todo: req.body.todo});
//     res.json({id:number_of_todos++, todo: todos[todos.length - 1]});
//     console.log(todos, "after push");
    
// })
// //Opens up a port on your computer for the server to listen to incoming requests//
// app.listen(3000, ()=> {
//     console.log("Server is running on port 3000");
// })

////////////////////////////////////////////////////////////////////////////////////
//Part 2:Create error checking in your server. 
//Make sure that endpoints that take client information are receiving the correct type and data.
// Return appropriate response error codes for each incorrect request

//Imports express from the node_modules folder
const express = require('express')

const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json

let todos = [];
let number_of_todos = 1;

// Returns entire todolist
app.get('/todo', function (req, res) {
  res.json({todos});
})

app.get('/todo', function (req, res) {
  console.log("Query Paremeter ID:", req.query.id);
  let taskiD =req.query.id;
  res.json({todos});
})

//Returns single todolist
app.get('/todo/:id', function (req, res) {
    let index = req.params.id - 1;
    res.json(todos[index]);
  })

// Adds a single task to the todolist
app.post('/todo', function(req, res) {
    //console.log(req.body.list.length);
    //Check if there is an array called list
        if(req.body.list == undefined){
            // Add a single todo
            todos.push({id: number_of_todos++, todo: req.body.todo, completed: false});
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
    // check to make sure Id is only numbers and no letters
    console.log(typeof (1))
    if(req.params.id == typeof(number)){
        let index = req.params.id - 1;
        todos[index].todo = req.body.todo;
        res.json(todos[index]);
    }else{
        // console.log(app.put)
        res.status(400).send('error')
    }
})



// app.use((err, req, res, next) => {

//     if(req.params.id === undefined){
       
//     } else (req.body.number.length > 0);{
// ;
//         }
//     } else if(req.body.number.length > 0);{
        
//         }
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
//   })

//Deletes a task from the todolist
// One person is looking for how to get a parameter from the client

app.delete('/todo/:id', (req, res)=> {
    let index = req.params.id - 1;
    let tempValue = todos[index];
    todos.splice(index, 1);
    res.json({todo: tempValue});
})

let deletedTask = []
//Deletes a task from the todolist
// One person is looking for how to get a parameter from the client
app.delete('/todo/:id', (req, res)=> {
    let index = req.params.id - 1;
    let tempValue = todos[index];
    deletedTask.push(tempValue);
    todos.splice(index, 1,{id: number_of_todos++} );
    res.json({todo: tempValue, deletedTask});
})



// Opens up a port on your computer for the server to listen to
// incoming requests
app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
})






