const express = require('express');
const router = express.Router();
const db = require('../configs/database');
const User = require('../models/User')

// Test Route
router.get('/', (req, res) => res.send('User Route'));

//User's endpoint
router.post("/create", async(req, res) => {

	const {username, email, firstname, lastname, password} = req.body.user
		
		try {
	
		  const existingUser = await User.findOne({ where: { username: username } })
		  const existingEmail = await User.findOne({ where: { email: email } })
	
		  if(existingUser){
			res.send("Username already exist.");
		  }else if(existingEmail){
			res.send("Email already exist.");
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
	
});

router.get("/search", async(req, res) => {

	const {userid} = req.body

	try {

	  const user = await User.findOne({ where: { userid: userid } })
	  
	  if(user){
		res.send(user)
	  }else{
		res.send("No user found")
	  }
  
	} catch(e) {
	  console.log(e);
	}
});

router.put("/edit", async(req, res) => {

	const {userid, username, email, firstname, lastname, password} = req.body.user

	//may send existing user info prior this route
	//const old_user_info = await User.findOne({ where: { userid: userid } })

	newUserInfo = {
		userid:userid, 
		username:username, 
		email:email, 
		firstname:firstname, 
		lastname:lastname, 
		password:password
	}

	try {

		const result = await User.update(newUserInfo, {where:{ userid: userid}})
		res.send(result)

	  } catch(e) {
		console.log(e);
	  }
})

router.delete("/delete", async(req, res) => {

	const { userid } = req.body.user;
	
	try {

		const result = await User.destroy({where:{ userid: userid}});
		if(result){
			res.send("User deleted.")
		}else{
			res.send("User delete failed or user does not exist.")
		}
		

	} catch(e) {
		console.log(e);
	}
})

router.post("/login", async(req, res) => {

	const {username, password} = req.body.user

	try {

	  const user = await User.findOne({ where: { username: username } })

		if((user.password).localeCompare(password)==0){  
			res.send(user.userid)
		}else{
			res.send("Invalid username or password")
		}
	
	} catch(e) {
	  console.log(e);
	}

});

module.exports = router;