const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());


app.use(bodyParser.json());

let users = [];

// GET запрос для получения списка пользователей
app.get('/users', (req, res) => {
  res.json(users);
});

// POST запрос для создания нового пользователя
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT запрос для обновления данных пользователя
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  users = users.map(user => (user.id === id ? updatedUser : user));
  res.json(updatedUser);
});

// DELETE запрос для удаления пользователя
app.delete('/users', (req, res) => {
  const usernameToDelete = req.query.username;
  users = users.filter(user => user.username !== usernameToDelete);
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});