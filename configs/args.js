const commandLineArgs = require('command-line-args');

const optionDefinitions = [{ name: 'env', type: String, defaultValue: 'dev' }];
module.exports = commandLineArgs(optionDefinitions);
