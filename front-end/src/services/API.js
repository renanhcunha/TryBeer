const headers = { 'Content-Type': 'application/json' };

const getUserData = async (email, password) => {
  const res = await fetch('http://localhost:3001/user/get-data', {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, password }),
  }).then((result) => result.json());

  if (res.message) return false;

  const { name, email: fetchedEmail, role } = res.user;
  const { token } = res;
  const formattedUser = { name, email: fetchedEmail, token, role };

  return formattedUser;
};

const addUser = async (name, email, password, check) => {
  const res = await fetch('http://localhost:3001/user/create', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name,
      email,
      password,
      role: (check ? 'administrator' : 'client') }),
  }).then((result) => result.json());
  if (res.message) return false;
  return res;
};

const updateUserName = async (name, email) => {
  const res = await fetch('http://localhost:3001/user/update', {
    method: 'PUT',
    headers,
    body: JSON.stringify({ name, email }),
  }).then((result) => result);
  return res;
};

const API = {
  getUserData,
  addUser,
  updateUserName,
};

module.exports = API;
