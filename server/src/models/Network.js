const sequelize = require('../configs/database.js');
const { Sequelize, DataTypes, Model } = require('sequelize');
const User = require('./User.js');

class Network extends Model {};

Network.init({
  networkid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  networkname: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  networkadmin: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'Network',
  tableName: 'networks'
});

async function createNetwork(network) {
  const { networkname, networkadmin } = network;
  const admin = await User.findOne({ where: {username: networkadmin}})
  if(!networkname || !networkadmin) {
    console.log("Need to provide all fields")
  } else if (!admin) {
    console.log("User does not exist")
  } else {
    try {
      await Network.create({
        networkname: network.networkname,
        networkadmin: admin.userid
      }, {})
    } catch(e) {
      console.log(e);
    }
  }
}

async function deleteNetwork(network) {
  const { networkname } = network;
  const networkToDelete = await Network.findOne({ where: {networkname: networkname} })
  if (!networkname) {
    console.log("Need to provide a network name")
  } else if (!networkToDelete) {
    console.log("Network does not exist")
  } else {
    try {
      Network.destroy({
        where: {
          networkname: networkToDelete.networkname
        }
      });
    } catch(e) {
        console.log(e)
    }
  }
}

async function editNetwork(network) {
  const { currentNetworkname, newNetworkName, newNetworkAdmin } = network;
  const networkToUpdate = await Network.findOne({ where: {networkname : currentNetworkname} })
  var updatedNetworkName = false 

  if (!currentNetworkname) {
    console.log("Need to provide a current network name to update")
  } else if (!networkToUpdate) {
    console.log("Network does not exist")
  } else if(networkToUpdate.networkname == newNetworkName) {
    console.log("Network name already exists. Choose another")
  } else {
    try {
      if (newNetworkName) {
        await Network.update({
          networkname: newNetworkName 
        }, {
          where: {
            networkname: currentNetworkname
          }
        })
        updatedNetworkName = true 
      }
      if (newNetworkAdmin) {
        const admin = await User.findOne({ where: {username: newNetworkAdmin}})

        if (!admin && updatedNetworkName) {
          // revert back if admin is not valid 
          await Network.update({
            networkname: currentNetworkname 
          }, {
            where: {
              networkname: newNetworkName
            }
          })
          console.log("User does not exist. Cannot update network")
        } else {
          // if there was a new network name update
          if (updatedNetworkName) {
            await Network.update({
              networkadmin: admin.userid
            }, {
              where: {
                networkname: newNetworkName
              }
            })
          } else {
            // if there was not a new network name
            await Network.update({
              networkadmin: admin.userid
            }, {
              where: {
                networkname: currentNetworkname
              }
            })
          }
        }
      }
    } catch(e) {
      console.log(e)
    }
  }
}

module.exports = {Network, createNetwork, deleteNetwork, editNetwork};