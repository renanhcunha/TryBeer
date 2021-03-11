const mysql = require('mysql2/promise')

const connection = mysql.createPool({
  user: 'root',
  password: '123456',
  host: 'localhost',
  database: 'Trybeer'
});

module.exports = connection;
