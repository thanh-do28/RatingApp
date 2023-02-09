module.exports = (sequelize, DataTypes) => {
  return sequelize.define("History", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    UserIdSend: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    UserIdReceive: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    UserPoint: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    AddPoint: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    MinusPoint: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};
