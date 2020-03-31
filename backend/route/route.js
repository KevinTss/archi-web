module.exports = (app, databaseConnection) => {
  app.get("/ping", (req, res) => {
    res.send("pong");
  });

  app.post("/login", (req, res) => {
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
  });

  app.post("/logout", (req, res) => {
    req.session.destroy();
    res.json({ logout: true });
  });

  app.get("/categories", (req, res) => {
    databaseConnection.query(
      "SELECT * FROM archi_web.categories;",
      (error, results) => {
        if (error) {
          console.log("error", error);
        }
        res.json(results);
      }
    );
  });

  app.get("/shoes", (req, res) => {
    databaseConnection.query(
      "SELECT * FROM archi_web.products;",
      (error, results) => {
        if (error) {
          console.log("error", error);
        }
        res.json(results);
      }
    );
  });

  app.post("/shoes", (req, res) => {
    const cat = req.query.cat;
    const brand = req.query.brand;
    const quantity = req.query.quantity;
    const comment = req.query.comment;

    databaseConnection.query(
      {
        sql:
          "INSERT INTO `archi_web`.`products` (`cat_id`, `name`, `quantity`, `comment`) VALUES (?, ?, ?, ?);",
        values: [cat, brand, quantity, comment]
      },
      (error, results) => {
        if (error) {
          console.log("error", error);
        }
        res.json(results);
      }
    );
  });
};
