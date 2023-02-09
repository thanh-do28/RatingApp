const db = require("../database/models/index");
const bcrypt = require("bcryptjs");
const User = require("../database/models/UserMongo");

module.exports.signin = async (req, res, next) => {
  try {
    // console.log(req.body.Email);
    const { Email, password } = req.body;
    const userMongo = await User.findOne({ Email });

    const user = await db.models.Users.findOne({
      where: {
        Email: req.body.Email,
      },
    });
    // console.log(user);
    if (!user) {
      res.status(404).send({
        message: "Email not found",
        status: 404,
      });
    }

    bcrypt.compare(req.body.Password, user.Password, function (err, res) {
      if (err) {
        res.status(err.status(500).json({ message: "Server err" }));
      }
      if (!res) {
        console.log("Sai");
      } else {
        console.log("Dung");
      }
    });
    const check = bcrypt.compare(req.body.Password, user.Password);
    console.log(check);

    if (check) {
      res.status(200).send({
        message: "login success",
        data: user.dataValues,
        dataMongo: userMongo,
      });
    } else {
      res.status(404).send({
        message: "error",
      });
    }

    // if (!isCorrect) {
    //   res.status(404).send({
    //     message: "Password not incorrect",
    //     status: 404,
    //   });
    // }
    // console.log(user);
  } catch (error) {
    return error;
  }
};

module.exports.resetUser = async (req, res) => {
  try {
    console.log(req.body.Email);
    const user = await db.models.Users.findOne({
      where: {
        email: req.body.Email,
      },
    });
    console.log();
    if (user.Email) {
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
