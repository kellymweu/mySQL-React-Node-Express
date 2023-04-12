const express = require("express");
const router = express.Router();
const { Comments } = require("../models");

/* GET ROUTE TO QUERY COMMENTS BY POST ID */
router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const comments = await Comments.findAll({ where: { PostId: postId } });
  res.json(comments);
});

/* POST ROUTE TO ADD COMMENTS TO A SPECIFIC POST */
router.post("/", async (req, res) => {
  const comment = req.body;
  await Comments.create(comment);
  res.json(comment);
});

module.exports = router;
