const path = require('path'),
    rootPath = path.normalize(__dirname + '/../..'),
    env = process.env.NODE_ENV || 'development';
const config = {
  development: {
    root: rootPath,
    app: {
      name: 'mvc-structure'
    },
    port: process.env.PORT || 3400,
    db: 'mongodb://localhost/test2-development'
  },

  production: {
    root: rootPath,
    app: {
      name: 'mvc-structure'
    },
    db: 'mysql://localhost/mvc-structure-production'
  }
};

module.exports = config[env];
