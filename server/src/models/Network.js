const Sequelize = require('sequelize');
const sequelize = require('../configs/database');

class Network extends Model {};

Network.init({
  networkid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  networkname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  networkadmin: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1
  },
}, {
  sequelize,
  modelName: 'Network',
  tableName: 'networks'
});