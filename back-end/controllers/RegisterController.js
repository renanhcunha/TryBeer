const { Router } = require('express');
const jwt = require('jsonwebtoken');
const { addUser } = require('../models/Register');
const { getUserByEmail } = require('../models/Login');

const RegisterController = new Router();

const CREATED = 201;
const BAD_REQUEST = 400;
const secret = 'theIncredibleSecret';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

RegisterController.post('/', async (req, res) => {
  const { name, email, password, role } = req.body;
  const token = jwt.sign({ data: [email, password] }, secret, jwtConfig);
  const alreadyExists = await getUserByEmail(email);
  if (alreadyExists) {
    return res.status(BAD_REQUEST).json({ message: 'Email já cadastrado.' }); 
  }
  await addUser(name, email, password, role);
  const user = {
    name,
    email,
    token,
    role,
  };
  
  res.status(CREATED).json(user);
});

module.exports = RegisterController;
