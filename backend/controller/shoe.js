const Shoe = require("../model/Shoe");

module.exports = {
  retrieveAll: (req, res) => {
    Shoe.find((shoes) => {
      res.json(shoes);
    });
  },

  add: (req, res) => {
    const data = {
      cat: req.query.cat,
      brand: req.query.brand,
      quantity: req.query.quantity,
      comment: req.query.comment,
    };

    Shoe.create(data, (response) => {
      res.json(response);
    });
  },

  edit: (req, res) => {
    const data = {
      cat: req.query.cat,
      brand: req.query.brand,
      quantity: req.query.quantity,
      comment: req.query.comment,
    };

    Shoe.edit(data, req.query.id, (response) => {
      res.json(response);
    });
  },

  delete: (req, res) => {
    Shoe.delete(req.query.id, (response) => {
      res.json(response);
    });
  },
};
