module.exports = (sequelize, DataTypes) => {
  return sequelize.define("interactive", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    usernameLikes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    usernameDislikes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
