const Sequelize = require('sequelize');
const sequelize = require('../configs/database');

class RentalHistory extends Model {};

RentalHistory.init({
  rentailid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  itemid: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  userlisted: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  renter: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  daterented: {
    type: DataTypes.DATE
  },
  dateoreturned: {
    type: DataTypes.DATE
  },
  state: {
    type: DataTypes.STRING
  },

}, {
  sequelize,
  modelName: 'RentalHistory',
  tableName: 'rentalhistory'
});
