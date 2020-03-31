const databaseConnection = require("../database");

class Shoe {
  constructor() {
    this.database = "archi_web";
    this.table = "products";
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

  create(data, callback) {
    databaseConnection.query(
      {
        sql: `INSERT INTO \`${this.database}\`.\`${this.table}\` (\`cat_id\`, \`name\`, \`quantity\`, \`comment\`) VALUES (?, ?, ?, ?);`,
        values: [data.cat, data.brand, data.quantity, data.comment]
      },
      (error, results) => {
        if (error) {
          console.log("error", error);
        }

        callback(results);
      }
    );
  }
}

const ShoeInstance = new Shoe();

module.exports = ShoeInstance;
