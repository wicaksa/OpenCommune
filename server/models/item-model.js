class ListedItem extends Model {}

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
})

// This is just a simple query to get all users
async function searchItem(itemname) {
  try {
      const items = await ListedItem.findAll({
        where: {
          itemname: itemname
        }
      //attributes: ['itemid', 'itemname']
    });
    console.log(items);
    return items;
  } catch(e) {
    console.log(e);
  }
}

async function getItemByID(itemid) {
  try {
    const item = await ListedItem.findByPk(5);
    console.log(item);
  } catch(e) {
    console.log(e);
  }
}

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

async function updateItem(item) {
  const { itemid, itemname, category, information, price, location, image, userlisted } = item;

  try {
    await ListedItem.update({
      itemname: itemname,
      category: category,
      information: information,
      price: price,
      location: location,
      image: image,
      userlisted: userlisted
    }, {
      where: {
        itemid: itemid
      }
    })
  } catch(e) {
    console.log(e);
  }
}

async function deleteItem(itemid, itemname, userlisted) {

  try {
    ListedItem.destroy({
      where: {
        itemid: itemid,
        itemname: itemname,
        userlisted: userlisted
      }
    });
  } catch(e) {
    res.send(e);
  }
}

module.exports = { ListedItem, searchItem, getItemByID, createItem, updateItem, deleteItem }
