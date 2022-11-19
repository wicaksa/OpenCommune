const sequelize = require('../configs/database.js');
const { Sequelize, DataTypes, Model } = require('sequelize');
const User = require('./User.js');
const Network = require('./Network.js');

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

async function enrollInNetwork(network) {
  const { username, networkname } = network;
  const user = await User.findOne({ where: {username: username }})
  const networkToEnroll = await Network.Network.findOne({ where: {networkname: networkname }})
  
  if (!user) {
    console.log("Cannot enroll. User does not exist.")
  } else if (!networkToEnroll) {
    console.log("Cannot enroll. Network does not exist.")
  } else {
    try {
      await NetworkEnrollment.create({
        userid: user.userid,
        networkid: networkToEnroll.networkid
      }, {})
    } catch(e) {
      console.log(e);
    }
  }
}

module.exports = {NetworkEnrollment, enrollInNetwork};