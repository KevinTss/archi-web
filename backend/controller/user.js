const User = require("../model/User");

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
        req.session.user = usr;
      }

      res.json(usr);
    });
  },

  logout: (req, res) => {
    req.session.destroy();
    res.json({ logout: true });
  }
};
