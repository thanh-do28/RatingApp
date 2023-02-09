const db = require("../database/models/index");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const UserMongo = require("../database/models/UserMongo");
module.exports.createUser = async (req, res) => {
  try {
    const getAllDb = req.body;
    const { username, Email, Password } = getAllDb;
    const check = await UserMongo.findOne({ Email });
    if (check) return res.json({ msg: "Email already used" });
    const passFontend = req.body.Password;
    console.log(passFontend);
    const salt = bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(passFontend, salt);
    const users = await UserMongo.create({
      _id: req.params.id,
      username,
      Email,
      Password: hash,
    });
    console.log(req.params.id);
    console.log(req.body.Password);
    delete users.Password;
    const userDetails = await db.models.Users.create({
      ...getAllDb,
      Password: hash,
    });

    // const userDetails = await db.models.Users.create({
    //   id: req.body.id,
    //   username: req.body.username,
    //   Email: req.body.Email,
    //   Password: hash,
    //   DOB: req.body.DOB,
    //   Gender: req.body.Gender,
    //   Avata: req.body.Avata,
    //   Level: req.body.Level,
    //   referralCode: req.body.ReferralCode,
    //   Status: req.body.Status,
    // });

    console.log(userDetails);

    // console.log(userDetails);

    res.status(200).send({
      status: 200,
      message: "Success",
      data: "data",
    });
  } catch (error) {
    console.log("hello");
    // console.log(error.errors[0].message);

    console.log(error);
    // console.log(error.errors[0].message);

    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};

module.exports.getAllUser = async (req, res) => {
  try {
    const usersMongo = await UserMongo.find({
      _id: { $ne: req.params.id },
    });
    const users = await db.models.Users.findAll();
    res.status(200).send({
      status: 200,
      message: "Success",
      data: users,
      dataMongo: usersMongo,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};

module.exports.getUserById = async (req, res) => {
  try {
    console.log(req.params.id);

    const user = await db.models.Users.findOne({
      where: {
        id: req.params.id,
        username: req.body.username,
      },
    });
    const userMongo = await UserMongo.findOne({
      // _id: user.id,
      username: req.body.username,
    });
    res.status(200).send({
      status: 200,
      data: user,
      dataMongo: userMongo,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    console.log(req.body.username);

    const user = await db.models.Users.findOne({
      where: {
        id: req.params.id,
      },
    });
    const userMongo = await UserMongo.findOne({
      // _id: req.params.id,
      username: req.body.username,
    });
    console.log("id", req.params.id);
    if (user) {
      console.log("hehehe");
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.Password, salt);
      console.log(user.username);
      // console.log("hello", userMongo.username);
      user.username = req.body.username;

      (user.Email = req.body.Email), (user.Password = hash);
      user.DOB = req.body.DOB;
      user.Gender = req.body.Gender;
      user.Avata = req.body.Avata;
      user.Level = req.body.Level;
      user.referralCode = req.body.referralCode;
      user.Status = req.body.Status;
      await user.save();
      await UserMongo.findOneAndUpdate({
        $set: { username: req.body.username },
      });
    }
    res.status(200).send({
      status: 200,
      message: "Success",
      data: user,
      dataMongo: userMongo,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    console.log(req.params.id);
    const user = await db.models.Users.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (user) {
      await user.destroy();
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

module.exports.resetUser = async (req, res) => {
  try {
    console.log(req.params.email);
    const user = await db.models.Users.findOne({
      where: {
        email: req.params.email,
      },
    });
    if (user) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.Password, salt);

      user.Password = hash;
      await user.save();
    }
    res.status(200).send({
      status: 200,
      message: "Success",
      data: user,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};
