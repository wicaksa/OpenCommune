// const { response } = require('express');
// const { Sequelize, DataTypes, Model } = require('sequelize');

// const sequelize = new Sequelize('opencommune', 'root', 'bantalkecil', {
//     host: 'localhost',
//     dialect: 'mysql',
//     define: {
//       timestamps: false
//     }
//   });

// // This function will print out if you are connecting to your local DB successfully
// async function checkWorking() {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// checkWorking();




//   async function register (newUser, res) {
//     const { username, email, firstname, lastname, password } = newUser;
//     try {

//       const existingUser = await User.findOne({ where: { username: username } })
//       const existingEmail = await User.findOne({ where: { email: email } })

//       if(existingUser){
//         res.send("Username already exist.");
//       }else if(existingEmail){
//         res.senf("Email already exist.");
//       }else if(!existingUser && !existingEmail){

//         await User.create({
//           username: username,
//           email: email,
//           firstname: firstname,
//           lastname: lastname,
//           password: password,
//         }, {
//           fields: ['username', 'email', 'firstname', 'lastname', 'password']
//         })

//         res.send("User created successfully.")
//       }

//     } catch(e) {
//       console.log(e)
//     }
//   }

//   async function login (uName, pWord, res) {
//     try {
//       const user = await User.findOne({ where: { username: uName } })
//       if(user.password == pWord){
//         res.send("Login successful!")
//       }else{
//         res.send("Invalid login information.")
//       }
  
//     } catch(e) {
//       console.log(e);
//     }
//   }

//   async function contact (uid, res) {
//     try {

//       const user = await User.findOne({ where: { userid: uid } })
      
//       if(user){
//         res.send(user)
//       }else{
//         res.send("No user found")
//       }
  
//     } catch(e) {
//       console.log(e);
//     }
//   }

// module.exports = {login, register, contact};

// // This is just a simple query to get all users
// async function getItems() {
//   try {

//     const items = await ListedItem.findAll({
//       attributes: ['itemid', 'itemname']
//     });
//     console.log(items.every(item => item instanceof ListedItem));
//     console.log("All items: ", JSON.stringify(items, null, 2));
//   } catch(e) {
//     console.log(e);
//   }
// }

// async function getItem(itemid) {
//   try {
//     const item = await ListedItem.findByPk(5);
//     console.log(item);
//   } catch(e) {
//     console.log(e);
//   }
// }

// async function createItem(item) {
//   const { itemname, category, information, price, location, image, userlisted } = item;
//   try {
//     await ListedItem.create({
//       itemname: itemname,
//       category: category,
//       information: information,
//       price: price,
//       location: location,
//       image: image,
//       userlisted: userlisted
//     }, {
//       fields: ['itemname', 'category', 'information', 'price', 'location', 'image', 'userlisted']
//     })
//   } catch(e) {
//     console.log(e);
//   }
// }

// async function deleteItem(item) {
//   const { itemname, category, information, price, location, image, userlisted } = item;

//   ListedItem.destroy({
//     where: {
//       itemname: itemname,
//       category: category,
//       information: information,
//       price: price,
//       location: location,
//       image: image,
//       userlisted: userlisted
//     }
//   });
// }

// item = {
//  itemname: "yeezy shoes",
//  category: "clothing",
//  information: "A pair of mint Yeezys",
//  price: 3.50,
//  location: "The Moon",
//  image: "https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Core-Black-Red-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1606319240&q=75",
//  userlisted: '76123458-5c8b-11ed-9b6a-0242ac120002'
// }

// deleteItem(item);
// createItem(item);
// getItem(5);
