const getUserRole = async (email, password) => {
  return await fetch('https://localhost:3001/login', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
};

const API = {
  getUserRole,
}

module.exports = API;
