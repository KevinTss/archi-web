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
        values: [data.cat, data.brand, data.quantity, data.comment],
      },
      (error, results) => {
        if (error) {
          console.log("error", error);
        }

        callback(results);
      }
    );
  }

  edit(data, id, callback) {
    databaseConnection.query(
      {
        sql: `UPDATE \`${this.database}\`.\`${this.table}\` SET \`cat_id\` = ?, \`name\` = ?, \`quantity\` = ?, \`comment\` = ? WHERE (\`id_product\` = ?);`,
        values: [data.cat, data.brand, data.quantity, data.comment, id],
      },
      (error, results) => {
        if (error) {
          console.log("error", error);
        }

        callback(results);
      }
    );
  }

  delete(id, callback) {
    databaseConnection.query(
      {
        sql: `DELETE FROM \`${this.database}\`.\`${this.table}\` WHERE (\`id_product\` = ?);`,
        values: [id],
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
