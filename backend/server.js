const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");
const route = require("./route/route");

const databaseConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootpass",
  databse: "archi_web"
});

const app = express();
app.use(cors());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
  })
);

route(app, databaseConnection);

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
