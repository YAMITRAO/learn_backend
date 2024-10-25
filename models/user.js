

const Sequelize = require("sequelize");

const sequelizedb = require("../util/database");


const User = sequelizedb.define("user", {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name :Sequelize.STRING,
      email: Sequelize.STRING
})

module.exports = User
