const getUserData = async (email, password) => {
  const res = await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
      'Content-Type': 'application/json',
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

const API = {
  getUserData,
  addUser,
};

module.exports = API;
