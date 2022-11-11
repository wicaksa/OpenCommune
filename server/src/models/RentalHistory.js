const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../configs/database');

class RentalHistory extends Model {};

RentalHistory.init({
  rentalid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
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
  datetoreturn: {
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

// ---------------- Class Methods ----------------------------// 

// Create a new rental
async function createRental(rental) {
  const { daterented, datetoreturn, state, itemid, userlisted, renter } = rental; 
  
  try {
    await RentalHistory.create( {
        daterented: daterented, 
        datetoreturn: datetoreturn, 
        state: state, 
        itemid: itemid,
        userlisted: userlisted, 
        renter:renter
    }, {
        fields: ['daterented', 'datetoreturn', 'state', 'itemid', 'userlisted', 'renter']
    });
  }
  catch(e) {
      console.log(e);
  }
};

module.exports = { RentalHistory, createRental };