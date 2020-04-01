const express = require("express");
const cors = require("cors");
const session = require("express-session");

const databaseConnection = require("./database");
const route = require("./route/route");

const app = express();
app.set("view engine", "ejs");
app.use(cors());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
  })
);

route(app);

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
