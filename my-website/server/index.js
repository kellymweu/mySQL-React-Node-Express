/* NODE JS AND EXPRESS JS SERVERS */
const express = require("express");
const app = express();
const cors = require("cors");

/* PARSE JSON FROM EXPRESS EXAMPLE TO POST FROM POSTMAN */
app.use(express.json());
/* CORS ALLOWS US TO MAKE AN AP REQUEST FROM THE SAME MACHINE HOSTING SERVER */
app.use(cors());
/*IMPORT TABLES FROM SEQUELIZE MODELS
also, change password in config/config.json to that of mySQL*/
const db = require("./models");

// ROUTERS
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);
const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);

db.sequelize.sync().then(() => {
  /* notifies that the app is running on port 3001 */
  app.listen(3001, () => {
    console.log("listening on port 3001");
  });
});
