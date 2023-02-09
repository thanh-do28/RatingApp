const express = require("express");
const auth = require("../controllers/auth.controller");
const router = express.Router();

router.post("/", auth.signin);

router.put("/", auth.resetUser);

module.exports = router;
