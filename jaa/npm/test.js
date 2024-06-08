const express = require('express')
const app = express()
const port = 5000




let todos = [];
let number_of_todos = 1;
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ todos });
});


app.post('/', (req, res) => {
  let newTodo = req.body.todo;
  if(req.body.list == undefined){
  todos.push({id: number_of_todos++, newTodo, completed: false});
  res.json('Todo has been added');
  } else if(req.body.list.length > 0){
      for(let i=0; i < req.body.list.length; i++){
          todos.push({id: number_of_todos++, todo: req.body.list[i].todo, completed: false});
      }
      res.json("Bulk Insert");
}
});

app.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(Number(req.params.id))) {
      clientError(req, "error: invalid Parameters",400)
      res.status(400).json({error: "invalid Parameters"})
  }
  // Req.params returns paramters that are passed through the path(url)
  let match;
  for(let i = 0; i < todos.length; i++){
      if(todos[i].id == req.params.id) {
          if(req.body.todo !== undefined){
              todos[i].todo = req.body.todo
          }
          if(req.body.completed !== undefined){
              todos[i].completed = req.body.completed
          }
      }
      match = todos[i];
  }
  res.json(todos[match]);

res.send('Got a PUT request at /user')
}) 