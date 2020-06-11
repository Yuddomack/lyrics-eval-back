require('dotenv').config();
const { env } = require('./args');

const config = {
  dev: {
    configStatus: 'dev',
    PORT: process.env.DEV_PORT || 9001,
    TIMEOUT_LIMIT: process.env.DEV_TIMEOUT_LIMIT || '8s',
    LOG_FORMAT:
      ':method :url :status :response-time ms - :res[content-length] body - :body',
    DB_HOST: process.env.DEV_DB_HOST || 'localhost',
    DB_USER: process.env.DEV_DB_USER || 'forus',
    DB_PWD: process.env.DEV_DB_PWD || '1111',
  },
  prod: {
    configStatus: 'prod',
    PORT: process.env.PROD_PORT || 9001,
    TIMEOUT_LIMIT: process.env.PROD_TIMEOUT_LIMIT || '8s',
    LOG_FORMAT:
      ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" body - :body',
    DB_HOST: process.env.PROD_DB_HOST || 'localhost',
    DB_USER: process.env.PROD_DB_USER || 'forus',
    DB_PWD: process.env.PROD_DB_PWD || '1111',
  },
};

module.exports = config[env];
