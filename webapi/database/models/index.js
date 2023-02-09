const dbConfig = require("./db");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.DATABASE,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
  }
);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.models = {};
db.models.Users = require("./Users.models")(sequelize, Sequelize.DataTypes);
db.models.Blogs = require("./Blogs.models")(sequelize, Sequelize.DataTypes);
db.models.Comment = require("./Comment.models")(sequelize, Sequelize.DataTypes);
db.models.History = require("./History.models")(sequelize, Sequelize.DataTypes);
db.models.Report = require("./Report.models")(sequelize, Sequelize.DataTypes);
db.models.Interactive = require("./Interactive.models")(
  sequelize,
  Sequelize.DataTypes
);

/** User */
db.models.Users.hasMany(db.models.Blogs);
db.models.Users.hasMany(db.models.History);
db.models.Users.hasMany(db.models.Comment);
db.models.Users.hasMany(db.models.Report);
db.models.Users.hasMany(db.models.Interactive);

/** Blog */
db.models.Blogs.hasMany(db.models.Comment);
db.models.Blogs.hasMany(db.models.Interactive);

db.models.Blogs.belongsTo(db.models.Users);

/** History */
db.models.History.belongsTo(db.models.Users);
db.models.History.belongsTo(db.models.Users, {
  as: "usernameSend",
  foreignKey: { name: "UserIdSend" },
});
db.models.History.belongsTo(db.models.Users, {
  as: "userIdReceive",
  foreignKey: { name: "UserIdReceive" },
});
db.models.History.belongsTo(db.models.Users);

/** Comment */
db.models.Comment.belongsTo(db.models.Users);

/** Report */
db.models.Report.belongsTo(db.models.Users);

/** Interactive */
db.models.Interactive.belongsTo(db.models.Users);
db.models.Interactive.belongsTo(db.models.Blogs);

module.exports = db;
