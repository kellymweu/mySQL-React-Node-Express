const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

/* GET REQUESTS */
/* passing ("/", ...) will pull data from index.js using the use command */
router.get("/", async (req, res) => {
  const listOfPosts = await Posts.findAll();
  res.json(listOfPosts);
});

/* GET ROUTE TO QUERY POSTS BY ID */
router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  res.json(post);
});

/* POST REQUESTS */
/* async ensures the await in post functions first  */
router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});

module.exports = router;
