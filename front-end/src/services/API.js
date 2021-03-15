const CONTENT_TYPE = 'application/json';

const getUserData = async (email, password) => {
  const res = await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': CONTENT_TYPE,
    },
    body: JSON.stringify({ email, password }),
  }).then((result) => result.json());

  if (res.message) return false;

  const { name, email: fetchedEmail, role } = res.user;
  const { token } = res;
  const formattedUser = { name, email: fetchedEmail, token, role };

  return formattedUser;
};

const addUser = async (name, email, password, check) => {
  const res = await fetch('http://localhost:3001/register', {
    method: 'POST',
    headers: {
      'Content-Type': CONTENT_TYPE,
    },
    body: JSON.stringify({
      name,
      email,
      password,
      role: (check ? 'administrator' : 'client') }),
  }).then((result) => result.json());
  if (res.message) return false;
  return res;
};

const getProducts = async () => {
  const res = await fetch('http://localhost:3001/products', {
    method: 'GET',
    headers: {
      'Content-Type': CONTENT_TYPE,
    },
  }).then((result) => result.json());

  if (res.message) return false;

  return res;
};

const API = {
  getUserData,
  addUser,
  getProducts,
};

module.exports = API;
