const Sequelize = require('sequelize');

const sequelize = new Sequelize('testdb', 'root', 'yADAV@12236', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
