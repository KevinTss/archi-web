const Category = require("../model/Category");

module.exports = {
  retrieveAll: (req, res) => {
    Category.find(categories => {
      res.json(categories);
    });
  }
};
