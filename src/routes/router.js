const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//ROUTES
router.get("/", (req, res) => {
  res.send(`Please use the following API routes: 
  GET/POST https://restapi-express.herokuapp.com/posts
  DELETE/UPDATE https://restapi-express.herokuapp.com/posts/:id`);
});

//get all posts
router.get("/posts", async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }

});

//get specific post
router.get("/posts/:id", async (req, res) => {
  try {
    const specificPost = await Post.findById(req.params.id);
    res.json(specificPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//create a post
router.post("/posts", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//delete post
router.delete("/posts/:id", async (req, res) => {
  try {
    const deletedPost = await Post.deleteMany({ _id: req.params.id });
    res.json(deletedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


//update post
router.patch("/posts/:id", async (req, res) => {
  const patchObj = req.body.title && {
    $set: req.body,
  };

  try {
    const updatedPost = await Post.updateOne({ _id: req.params.id }, patchObj);
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

module.exports = router;
