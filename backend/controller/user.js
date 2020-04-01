const User = require("../model/User");
const jwt = require("jsonwebtoken");

module.exports = {
  login: (req, res) => {
    const username = req.query.username;
    const password = req.query.password;

    User.find(users => {
      users.map(user => {
        if (username === user.username && password === user.password) {
          usr = user;
        } else {
          usr = null;
        }
      });

      if (usr) {
        const token = jwt.sign({ userId: usr.id_user }, "supersecret");
        req.session.user = usr;
        req.session.token = token;
      }

      res.json({ user: usr, token: req.session.token });
    });
  },

  logout: (req, res) => {
    req.session.destroy();
    res.json({ logout: true });
  }
};
