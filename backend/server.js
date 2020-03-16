const express = require("express");
const mysql = require("mysql");

const databaseConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootpass",
  databse: "archi_web"
});

const app = express();

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/shoes", (req, res) => {
  databaseConnection.query(
    "SELECT * FROM archi_web.products;",
    (error, results) => {
      if (error) {
        console.log("error", error);
      }
      res.json(results);
    }
  );
});

app.post("/shoes", (req, res) => {
  databaseConnection.query(
    "INSERT INTO `archi_web`.`products` (`cat_id`, `name`, `quantity`) VALUES ('1', 'Nike', '3');",
    (error, results) => {
      if (error) {
        console.log("error", error);
      }
      res.json(results);
    }
  );
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
