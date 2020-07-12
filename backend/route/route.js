const jwt = require("jsonwebtoken");
const welcomeController = require("../controller/home");
const userController = require("../controller/user");
const categoryController = require("../controller/category");
const shoeController = require("../controller/shoe");

const requireValidToken = (req, res, next) => {
  const token = req.query.token;

  jwt.verify(token, "supersecret", (err, decoded) => {
    if (err) {
      res.send("Unauthorized");
    } else {
      next();
    }
  });
};

module.exports = (app) => {
  app.get("/", welcomeController.welcome);

  app.post("/login", userController.login);

  app.post("/logout", requireValidToken, userController.logout);

  app.get("/categories", requireValidToken, categoryController.retrieveAll);

  app.get("/shoes", requireValidToken, shoeController.retrieveAll);

  app.post("/shoes", requireValidToken, shoeController.add);

  app.put("/shoes", requireValidToken, shoeController.edit);

  app.delete("/shoes", requireValidToken, shoeController.delete);
};
