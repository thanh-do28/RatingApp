const express = require("express");
const history = require("../controllers/history.controller");

const router = express.Router();

router.post("/", history.createHistory);

router.get("/", history.getAllHistory);

router.get("/:id", history.getHistorytById);

router.put("/:id", history.updateHistory);

router.delete("/:id", history.deleteHistory);

module.exports = router;
