const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('opencommune', 'root', '<<ENTER_YOUR_MYSQL_PASSWORD_HERE>>', {
    host: 'localhost',
    dialect: 'mysql'
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
    primaryKey: false
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


// This is just a simple query to get all users
async function getUsers() {
  try {

    const users = await User.findAll({
      attributes: ['userid', 'username', 'firstname', 'lastname', 'email']
    });
    console.log(users.every(user => user instanceof User));
    console.log("All users: ", JSON.stringify(users, null, 2));
  } catch(e) {
    console.log(e);
  }
}

getUsers()