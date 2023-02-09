module.exports = (sequelize, DataTypes) => {
  return sequelize.define("blogs", {
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
    Content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ImgVideo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Total: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Like: {
      type: DataTypes.INTEGER,
    },
    Dislike: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Startus: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};
