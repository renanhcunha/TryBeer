const { Router } = require('express');
const jwt = require('jsonwebtoken');
const { userExists } = require('../models/Login');

const LoginController = new Router();

const SUCCESS = 200;
const secret = 'theIncredibleSecret';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

LoginController.get('/', async (req, res) => {
  const { email, password } = req.body;
  const exists = await userExists(email, password);
  const token = jwt.sign({ data: [email, password] }, secret, jwtConfig);
  
  res.status(SUCCESS).json({ exists, token });
});

module.exports = LoginController;
