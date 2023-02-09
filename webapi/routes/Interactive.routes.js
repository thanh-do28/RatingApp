const express = require("express");
const Interactive = require("../controllers/Interactive.controller");

const router = express.Router();

router.post("/", Interactive.createInteractive);

router.get("/", Interactive.getInteractive);

module.exports = router;
