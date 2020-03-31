const welcomeController = require("../controller/home");
const userController = require("../controller/user");
const categoryController = require("../controller/category");
const shoeController = require("../controller/shoe");

module.exports = app => {
  app.get("/", welcomeController.welcome);

  app.post("/login", userController.login);

  app.post("/logout", userController.logout);

  app.get("/categories", categoryController.retrieveAll);

  app.get("/shoes", shoeController.retrieveAll);

  app.post("/shoes", shoeController.add);
};
