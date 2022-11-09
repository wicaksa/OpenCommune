const Sequelize = require('sequelize');
const sequelize = require('../../database');

class ListedItem extends Model {};

ListedItem.init({
  itemid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true

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
    allowNull: false
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
