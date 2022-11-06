const { response } = require('express');
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('opencommune', 'root', 'Csk27138944/', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
      timestamps: false
    }
  });

// This function will print out if you are connecting to your local DB successfully
async function checkWorking() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

checkWorking();


// This is the User entity for the db
class User extends Model{}

User.init({
  userid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users'
});

  async function register (newUser, res) {
    const { username, email, firstname, lastname, password } = newUser;
    try {

      const existingUser = await User.findOne({ where: { username: username } })
      const existingEmail = await User.findOne({ where: { email: email } })

      if(existingUser){
        res.send("Username already exist.");
      }else if(existingEmail){
        res.senf("Email already exist.");
      }else if(!existingUser && !existingEmail){

        await User.create({
          username: username,
          email: email,
          firstname: firstname,
          lastname: lastname,
          password: password,
        }, {
          fields: ['username', 'email', 'firstname', 'lastname', 'password']
        })

        res.send("User created successfully.")
      }

    } catch(e) {
      console.log(e)
    }
  }

  async function login (uName, pWord, res) {
    try {
      const user = await User.findOne({ where: { username: uName } })
      if(user.password == pWord){
        res.send("Login successful!")
      }else{
        res.send("Invalid login information.")
      }
  
    } catch(e) {
      console.log(e);
    }
  }

  async function contact (uid, res) {
    try {

      const user = await User.findOne({ where: { userid: uid } })
      
      if(user){
        res.send(user)
      }else{
        res.send("No user found")
      }
  
    } catch(e) {
      console.log(e);
    }
  }

module.exports = {login, register, contact};

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
})

class PurchaseHistory extends Model {}

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
})

// This is just a simple query to get all users
async function getItems() {
  try {

    const items = await ListedItem.findAll({
      attributes: ['itemid', 'itemname']
    });
    console.log(items.every(item => item instanceof ListedItem));
    console.log("All items: ", JSON.stringify(items, null, 2));
  } catch(e) {
    console.log(e);
  }
}

async function getItem(itemid) {
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

item = {
 itemname: "yeezy shoes",
 category: "clothing",
 information: "A pair of mint Yeezys",
 price: 3.50,
 location: "The Moon",
 image: "https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Core-Black-Red-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1606319240&q=75",
 userlisted: '76123458-5c8b-11ed-9b6a-0242ac120002'
}

deleteItem(item);
createItem(item);
getItem(5);