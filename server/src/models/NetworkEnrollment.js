const Sequelize = require('sequelize');
const sequelize = require('../configs/database');

class NetworkEnrollment extends Model {};

NetworkEnrollment.init({
  enrollmentid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userid: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  networkid: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'NetworkEnrollment',
  tableName: 'networkenrollment'
});