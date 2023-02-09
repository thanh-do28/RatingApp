const express = require("express");
const comment = require("../controllers/comment.controller");

const router = express.Router();

router.post("/", comment.createComment);

router.get("/", comment.getAllComment);

router.get("/:id", comment.getCommentById);

router.put("/:id", comment.updateComment);

router.delete("/:id", comment.deleteComment);

module.exports = router;
