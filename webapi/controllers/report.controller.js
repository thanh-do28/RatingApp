const db = require("../database/models/index");

module.exports.createReport = async (req, res) => {
  try {
    const reportDetails = await db.models.Report.create({
      ...req.body,
    });

    res.status(200).send({
      status: 200,
      message: "Success",
      data: reportDetails,
    });
  } catch (error) {
    // console.log(error.errors[0].message);
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};

module.exports.getAllReport = async (req, res) => {
  try {
    const report = await db.models.Report.findAll();
    res.status(200).send({
      status: 200,
      message: "Success",
      data: report,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};

module.exports.getReportById = async (req, res) => {
  try {
    const report = await db.models.Report.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({
      status: 200,
      data: report,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};

module.exports.updateReport = async (req, res) => {
  try {
    const report = await db.models.Report.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (report) {
      report.Content = req.body.Content;
      await report.save();
    }
    res.status(200).send({
      status: 200,
      message: "Success",
      data: report,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};

module.exports.deleteReport = async (req, res) => {
  try {
    const report = await db.models.Report.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (report) {
      await report.destroy();
    }
    res.status(200).send({
      status: 200,
      message: "Delete oke",
      data: report,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};
module.exports.deleteReport = async (req, res) => {
  try {
    const report = await db.models.Report.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (report) {
      await report.destroy();
    }
    res.status(200).send({
      status: 200,
      message: "Delete oke",
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};
