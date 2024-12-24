const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "MyCatLikesToJumpHigh1234",
  database: "node_js",
  port: 3309,
});

db.getConnection((err, connection) => {
  if (err) {
    console.log(err);
  } else {
    console.log("database connected successful");
    connection.release();
  }
});

module.exports = db.promise();
