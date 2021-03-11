const connection = require('./connection');

const userExists = async (email, password) => {
  const [[user]] = await connection.execute('SELECT * FROM users WHERE email=? LIMIT 1', email);
  if (user && user.password === password) {
    return user;
  }

  return false;
};

module.exports = {
  userExists,
};
