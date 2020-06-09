const { env } = require('./args');

const config = {
  dev: {
    configStatus: 'dev',
  },
  prod: {
    configStatus: 'prod',
  },
};

module.exports = config[env];
