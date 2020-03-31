const databaseConnection = require("../database");

class User {
  constructor() {
    this.database = "archi_web";
    this.table = "users";
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

const UserInstance = new User();

module.exports = UserInstance;
