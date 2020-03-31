const databaseConnection = require("../database");

module.exports = {
  retrieveAll: (req, res) => {
    databaseConnection.query(
      "SELECT * FROM archi_web.categories;",
      (error, results) => {
        if (error) {
          console.log("error", error);
        }
        res.json(results);
      }
    );
  }
};
