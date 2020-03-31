const databaseConnection = require("../database");

module.exports = {
  login: (req, res) => {
    const username = req.query.username;
    const password = req.query.password;

    databaseConnection.query(
      "SELECT * FROM archi_web.users;",
      (error, results) => {
        if (error) {
          console.log("error", error);
        }

        let usr;
        results.map(user => {
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
      }
    );
  },
  logout: (req, res) => {
    req.session.destroy();
    res.json({ logout: true });
  }
};
