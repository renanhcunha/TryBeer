const getUserData = async (email, password) => {
  const { exists, token } = await fetch('https://localhost:3001/login', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (exists !== false) {
    const { name, email: fetchedEmail, role } = exists;
    const formattedUser = {
      user: { name, email: fetchedEmail, token, role },
    };

    return formattedUser;
  }
  return false;
};

const API = {
  getUserData,
};

module.exports = API;
