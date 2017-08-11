const express = require('express');
const bodyParser = require('body-parser');
const Todo = require('./Todo');

const app = express();
app.use(bodyParser.json());

const port = 3000;
let todos = [];

app.get('/api/todos', (_, response) => response.json(todos));

app.post('/api/todos/add', (request, response) => {
  const body = request.body;
  if (body && body.add) {
    const id = '' + todos.length;
    todos = todos.concat(new Todo(id, body.add));
  }
  response.json(todos);
});

app.del('/api/todos/:id', (request, response) => {
  const removeId = request.params.id;
  todos = todos.filter(todo => todo.id !== removeId);
  response.json(todos);
});

app.put('/api/todos/:id/title', (request, response) => {
  const body = request.body;
  if (body && body.title) {
    const todo = todos.find(todo => todo.id === request.params.id);
    if (todo) {
      todo.title = body.title;
    }
  }
  response.json(todos);
});

app.post('/api/todos/removeCompleted', (request, response) => {
  todos = todos.filter(todo => !todo.completed);
  response.json(todos);
});

app.post('/api/todos/setAll', (request, response) => {
  const body = request.body;
  if (body && typeof(body.completed) === 'boolean') {
    todos.forEach(todo => todo.completed = body.completed);
  }
  response.json(todos);
});

app.post('/api/todos/:id/toggleCompletion', (request, response) => {
  const todo = todos.find(todo => todo.id === request.params.id);
  if (todo) {
    todo.completed = !todo.completed
  }
  response.json(todos);
});

app.listen(port, () => console.log(`Running at http://localhost:${port}/`));
