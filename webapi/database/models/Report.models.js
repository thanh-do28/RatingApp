module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Report", {
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
    Content: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
