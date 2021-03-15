const express = require('express');
const cors = require('cors');
const LoginController = require('./controllers/LoginController');
const RegisterController = require('./controllers/RegisterController');
const ProductsController = require('./controllers/ProductsController');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/login', LoginController);
app.use('/register', RegisterController);
app.use('/products', ProductsController);

app.get('/', (_request, response) => {
  response.send('Hello World');
});

app.listen(PORT);
