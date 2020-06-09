require('dotenv').config();
const { env } = require('./args');

const config = {
  dev: {
    configStatus: 'dev',
    PORT: process.env.DEV_PORT || 9001,
    TIMEOUT_LIMIT: process.env.DEV_TIMEOUT_LIMIT || '8s',
  },
  prod: {
    configStatus: 'prod',
    PORT: process.env.PROD_PORT || 9001,
    TIMEOUT_LIMIT: process.env.PROD_TIMEOUT_LIMIT || '8s',
  },
};

module.exports = config[env];
