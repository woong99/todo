const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'jhan00254!',
  database: 'todo',
});

module.exports = db;
