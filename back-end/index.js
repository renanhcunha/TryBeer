const express = require('express');
const cors = require('cors');
const UserController = require('./controllers/UserController');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/user', UserController);

app.get('/', (_request, response) => {
  response.send('Hello World');
});

app.listen(PORT);
