// const ejs = require("ejs");

module.exports = {
  welcome: async (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shoe API</title>
      </head>
      <body>
        <h1>Welcome on Shoes shop API</h1>
      </body>
    </html>
    `);
    // const html = await ejs
    //   .renderFile("../view/welcomePage.ejs", { model: false })
    //   .then(output => output);
    // console.log("stering", html);

    // //   ejs.renderFile("../view/welcomePage.ejs", {}, {}, (err, str) => {
    // //     console.log("err", err);
    // //     console.log("str", str);

    // res.send("ok");
    // //   });
  }
};
