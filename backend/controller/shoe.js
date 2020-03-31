const Shoe = require("../model/Shoe");

module.exports = {
  retrieveAll: (req, res) => {
    Shoe.find(shoes => {
      res.json(shoes);
    });
  },

  add: (req, res) => {
    const data = {
      cat: req.query.cat,
      brand: req.query.brand,
      quantity: req.query.quantity,
      comment: req.query.comment
    };

    Shoe.create(data, response => {
      res.json(response);
    });
  }
};
