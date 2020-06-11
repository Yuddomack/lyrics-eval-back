const { Sequelize } = require('sequelize');
const { DB_HOST, DB_USER, DB_PWD } = require('../configs');

const sequelize = new Sequelize('lyrics_eval', DB_USER, DB_PWD, {
  host: DB_HOST,
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT0',
  },
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./Dummy')(sequelize, Sequelize);

module.exports = db;
