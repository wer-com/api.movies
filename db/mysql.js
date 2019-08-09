const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit : 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "Movies"
});

pool.getConnection((err,connection)=>{
  if (err) {
    connection.release();
    throw err;
  }})

module.exports = pool;