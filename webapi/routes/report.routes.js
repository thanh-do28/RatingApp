const express = require("express");
const report = require("../controllers/report.controller");

const router = express.Router();

router.post("/", report.createReport);

router.get("/", report.getAllReport);

router.get("/:id", report.getReportById);

router.put("/:id", report.updateReport);

router.delete("/:id", report.deleteReport);

module.exports = router;
