const pgp = require('pg-promise')();
const db = pgp("postgres://corcoding@localhost:5432/postgres");
const express = require('express')
const app = express()
const port = 
app.use(express.json()); //this is middleware used to parse incoming JSON data from HTTP requests

let todos =[] // this array is where we will push the todos into 
let number_of_todos = 1; // the number of todos incremented by 1


app.get('/', (req, res) => {
    res.json(todos)}) // this will be returned from get 
  
 app.post('/', (req, res) => {
    let newTodo = req.body.todo; // set variable (newTodo)for whatever is posted to body (req.body.tod)
    if(req.body.list == undefined){ // if there is no list then  -->
    todos.push({id: number_of_todos++, newTodo, completed: false}); //then push the id : no of todos, the new todo, and if it was  completed or not 
    res.json('Todo has been added'); // the response will display Todo has been added
    } else if(req.body.list.length > 0){ // if the length of the list is greater than 0 then 
        for(let i=0; i < req.body.list.length; i++){ //loop through the full length  of the  todo list one by one
            todos.push({id: number_of_todos++, todo: req.body.list[i].todo, completed: false}); //add id of number of todos, the todo, requested  body of each index of the todo list, and each todo will have the completed status as false & push to the  todos array//
          }
          res.json("Bulk Insert");//this will be returned from the post 
    }
    });

    app.put('/:id', (req, res) => {
      const id = req.params.id;
      const updatedFields = req.body;
      for (let i = 0; i < todos.length; i++) { //iterate through todos 
          if (todos[i].id == id) { //if the index of the todo id matches the id given 
              todos[i] = { ...todos[i], ...updatedFields };//then combine the updated fields with the current todo 
              res.send('Todo updated successfully');//returns Todo updated successfully 
              return;
          }
      }
      res.send('Todo not found'); //if not to do not found
  });


  app.delete('/:id', (req, res) => {
    const id = req.params.id; // set id = to requested param id 
    for (let i = 0; i < todos.length; i++) { //loop through your ids 
        if (todos[i].id == id) {//if the index of the id is = to the inputted requested id 
            todos.splice(i, 1); // then remove the todo at the index(position) and 1 item (splice = splice(position/index, number of items to remove))
            res.send('Todo deleted successfully'); // returns todo deleted successfully 
            return;
        }
    }
    res.send('Todo not found');
});
  
    // app.put('/:id', (req, res) => {
    //   const id = parseInt(req.params.id); //Converting the string id  to the number id of requested parameter id 
    //   if (isNaN(Number(req.params.id))) { // if the requested parameter is not a number then 
    //       clientError(req, "error: invalid Parameters",400) // provide this error message 
    //       res.status(400).json({error: "invalid Parameters"}) // return this response
    //   }
    //   // Req.params returns paramters that are passed through the path(url)
    //   let match; //initializing the match parameter - setting variable for match
    //   for(let i = 0; i < todos.length; i++){ //loop through the the todos 
    //       if(todos[i].id == req.params.id) {//if the index of the id = the requested id 
    //           if(req.body.todo !== undefined){ //&& if the requested todo is not undefined  then 
    //               todos[i].todo = req.body.todo // then the todo list matches the requested todo
    //           }
    //           if(req.body.completed !== undefined){
    //               todos[i].completed = req.body.completed
    //           }
    //       }
    //       match = todos[i];
    //   }
    //   res.json(todos[match]);
    
  
    
    // res.send('Got a PUT request at /user')
    // }) 
  
  // app.delete('/user', (req, res) => {
  // res.json('Got a DELETE request at /user')
  // })
  
  



  app.listen(port, () => {
    console.log("server is running on port 5000")
  })























