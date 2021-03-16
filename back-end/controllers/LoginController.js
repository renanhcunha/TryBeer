const { Router } = require('express');
const jwt = require('jsonwebtoken');
const { getUserByEmail } = require('../models/Login');
const { verifyValidToken } = require('../services/TokenValidator');

const LoginController = new Router();

const SUCCESS = 200;
const BAD_REQUEST = 400;
const secret = 'theIncredibleSecret';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

LoginController.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);
  
  if (!user || user.password !== password) {
    return res.status(BAD_REQUEST).json({ message: 'Email ou senha inválidos.' }); 
  }
  const token = jwt.sign({ data: [email, password] }, secret, jwtConfig);
  
  res.status(SUCCESS).json({ user, token });
});

LoginController.post('/decodeToken', async (req, res) => {
  const { token } = req.body;
  const decodedUser = verifyValidToken(token);
  const registeredUser = await getUserByEmail(decodedUser.email);
  
  if (!decodedUser || !registeredUser || decodedUser.password !== registeredUser.password) {
    return res.status(BAD_REQUEST).json({ message: 'Email ou senha inválidos.' }); 
  }

  res.status(SUCCESS).json(true);
});

module.exports = LoginController;
