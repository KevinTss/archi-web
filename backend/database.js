const mysql = require("mysql");

module.exports = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootpass",
  databse: "archi_web"
});
