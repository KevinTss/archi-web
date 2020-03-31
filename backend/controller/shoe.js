const databaseConnection = require("../database");

module.exports = {
  retrieveAll: (req, res) => {
    databaseConnection.query(
      "SELECT * FROM archi_web.products;",
      (error, results) => {
        if (error) {
          console.log("error", error);
        }
        res.json(results);
      }
    );
  },

  add: (req, res) => {
    const cat = req.query.cat;
    const brand = req.query.brand;
    const quantity = req.query.quantity;
    const comment = req.query.comment;

    databaseConnection.query(
      {
        sql:
          "INSERT INTO `archi_web`.`products` (`cat_id`, `name`, `quantity`, `comment`) VALUES (?, ?, ?, ?);",
        values: [cat, brand, quantity, comment]
      },
      (error, results) => {
        if (error) {
          console.log("error", error);
        }
        res.json(results);
      }
    );
  }
};
