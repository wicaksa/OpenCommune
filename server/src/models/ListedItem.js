const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../configs/database');

class ListedItem extends Model {};

ListedItem.init({
  itemid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false

  },
  networkid:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  itemname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  information: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userlisted: {
    type: DataTypes.UUID,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'ListedItem',
  tableName: 'listeditems'
});

// ----- Methods ---- ///

async function createItem(item) {
  const { itemname, category, information, price, location, image, userlisted } = item;
  try {
    await ListedItem.create({
      itemname: itemname,
      category: category,
      information: information,
      price: price,
      location: location,
      image: image,
      userlisted: userlisted
    }, {
      fields: ['itemname', 'category', 'information', 'price', 'location', 'image', 'userlisted']
    })
  } catch(e) {
    console.log(e);
  }
}

async function deleteItem(item) {
  const { itemname, category, information, price, location, image, userlisted } = item;

  ListedItem.destroy({
    where: {
      itemname: itemname,
      category: category,
      information: information,
      price: price,
      location: location,
      image: image,
      userlisted: userlisted
    }
  });
}

// Export the file 
module.exports = {ListedItem, createItem, deleteItem};