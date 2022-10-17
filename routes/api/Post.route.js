const express = require("express"),
      router = express.Router(),
      postController =require("../../controllers/Post.controller")
      auth = require("../../Middleware/Auth.middleware")();

      router.get("/mypost", auth.authenticate(), postController.get_post);

      module.exports = router