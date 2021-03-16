const connection = require('./connection');

const updateUserName = async (name, email) => {
  await connection.execute(
    'UPDATE users SET name=? WHERE email=?', [name, email],
  );
};

module.exports = {
  updateUserName,
};
