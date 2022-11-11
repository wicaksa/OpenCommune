const Sequelize = require('sequelize');
const sequelize = require('../configs/database');

class PurchaseHistory extends Model {};

PurchaseHistory.init({
  purchaseid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  datesold: {
    type: DataTypes.DATE,
    allowNull: false
  },
  pricesold: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  userlisted: {
    type: DataTypes.UUID,
    allowNull: false
  },
  purchaser: {
    type: DataTypes.UUID,
    allowNull: false
  },
  itemid: {
    type: DataTypes.INTEGER
  }

}, {
  sequelize,
  modelName: 'PurchaseHistory',
  tableName: 'purchasehistory'
});
