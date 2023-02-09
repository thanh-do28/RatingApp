// const { DataTypes } = require("sequelize");
// let db = require("./db");

// const Comment = db.define("Comment", {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true,
//   },
//   UserId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   BlogId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   Total: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   Content: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   Like: {
//     type: DataTypes.INTEGER,
//     allowNull: true,
//   },
//   Dislike: {
//     type: DataTypes.INTEGER,
//   },
//   Status: {
//     type: DataTypes.INTEGER,
//     allowNull: true,
//   },
//   Clap: {
//     type: DataTypes.INTEGER,
//     allowNull: true,
//   },
// });

// db.sync();
// module.exports = Comment;

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Comment", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    // UserId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    // BlogId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    Total: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Like: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Dislike: {
      type: DataTypes.INTEGER,
    },
    Status: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Clap: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};
