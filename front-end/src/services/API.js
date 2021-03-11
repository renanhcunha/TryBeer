const getUserData = async (email, password) => {
  const { exists, token } = await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((result) => result);

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
