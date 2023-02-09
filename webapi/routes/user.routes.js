const express = require("express");
const users = require("../controllers/users.controller");

const router = express.Router();

router.post("/", users.createUser);

router.get("/", users.getAllUser);
router.get("/allusers/:id", users.getAllUser);

router.get("/:id", users.getUserById);

router.put("/:id", users.updateUser);

router.delete("/:id", users.deleteUser);

module.exports = router;
