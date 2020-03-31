const databaseConnection = require("../database");

class Category {
  constructor() {
    this.database = "archi_web";
    this.table = "categories";
  }

  find(callback) {
    databaseConnection.query(
      `SELECT * FROM ${this.database}.${this.table};`,
      (error, results) => {
        if (error) {
          console.log("error", error);
        }

        callback(results);
      }
    );
  }
}

const CategoryInstance = new Category();

module.exports = CategoryInstance;
