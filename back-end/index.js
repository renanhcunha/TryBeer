const express = require('express');
const LoginController = require('./controllers/LoginController');

const PORT = 3001;
const app = express();

app.use(express.json());

app.use('/login', LoginController);

app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT);
