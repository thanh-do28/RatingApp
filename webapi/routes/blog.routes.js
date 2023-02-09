const express = require("express");
const blog = require("../controllers/blog.controller");

const router = express.Router();

router.get("/", blog.getAllBlog);

router.post("/", blog.createBlog);

router.get("/:id", blog.getBlogById);

router.put("/:id", blog.updateBlog);

router.delete("/:id", blog.deleteBlog);

module.exports = router;
