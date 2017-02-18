var nconf = require('nconf');

nconf
  .argv()
  .env()
  .file('./config/config.json');

module.exports = nconf;
