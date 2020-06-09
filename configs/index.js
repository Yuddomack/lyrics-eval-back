require('dotenv').config();
const { env } = require('./args');

const config = {
  dev: {
    configStatus: 'dev',
    PORT: process.env.DEV_PORT || 9001,
  },
  prod: {
    configStatus: 'prod',
    PORT: process.env.PROD_PORT || 9001,
  },
};

module.exports = config[env];
