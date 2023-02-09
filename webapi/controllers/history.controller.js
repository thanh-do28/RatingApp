const db = require("../database/models/index");

module.exports.createHistory = async (req, res) => {
  try {
    const historyDetails = await db.models.History.create({
      ...req.body,
    });

    res.status(200).send({
      status: 200,
      message: "Success",
      data: historyDetails,
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

module.exports.getAllHistory = async (req, res) => {
  try {
    const history = await db.models.History.findAll({
      include: [
        {
          model: db.models.Users,
          as: "usernameSend",
          require: false,
        },
        { model: db.models.Users, as: "userIdReceive", require: false },
      ],
    });
    res.status(200).send({
      status: 200,
      message: "Success",
      data: history,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};

module.exports.getHistorytById = async (req, res) => {
  try {
    const history = await db.models.History.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({
      status: 200,
      data: history,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};

module.exports.updateHistory = async (req, res) => {
  try {
    const history = await db.models.History.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (history) {
      history.UserIdSend = req.body.UserIdSend;
      history.UserIdReceive = req.body.UserIdReceive;
      history.UserPoint = req.body.UserPoint;
      history.AddPoint = req.body.AddPoint;
      history.MinusPoint = req.body.MinusPoint;
      await history.save();
    }
    res.status(200).send({
      status: 200,
      message: "Success",
      data: history,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};

module.exports.deleteHistory = async (req, res) => {
  try {
    const history = await db.models.History.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (history) {
      await history.destroy();
    }
    res.status(200).send({
      status: 200,
      message: "Delete oke",
      data: history,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};
module.exports.deleteHistory = async (req, res) => {
  try {
    const history = await db.models.History.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (history) {
      await history.destroy();
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
