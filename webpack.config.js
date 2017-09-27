const prod = require('./webpack/prod.js');
const dev = require('./webpack/dev.js');

function config(env) {
  switch (env) {
    case 'prod':
      return prod;
    case 'dev':
      return dev;
    default:
      return prod;
  }
}

module.exports = config;
