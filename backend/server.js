const express = require("express");
const mysql = require("mysql");

const databaseConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootpass",
  databse: "archi-web"
});

const app = express();

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000/");
  databaseConnection.connect(error => {
    if (error) {
      console.log(error);
    } else {
      console.log("=== Database connected ===");
    }
  });
});
