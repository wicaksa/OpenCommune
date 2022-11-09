// Add Sequelize
const {Sequelize} = require('sequelize');

// Connecting to a database
module.exports = new Sequelize('opencommune', 'root', 'bantalkecil', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
      timestamps: false
    }
  });

