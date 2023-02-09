const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  Email: {
    type: String,
    require: true,
  },
  Password: {
    type: String,
  },
  Point: {
    type: Number,
  },
  DOB: {
    type: String,
  },
  Gender: {
    type: String,
  },
  Avata: {
    type: String,
  },
  Level: {
    type: String,
  },
  referralCode: {
    type: String,
  },
  Status: {
    type: Number,
  },
});
module.exports = mongoose.model("Users", userSchema);
