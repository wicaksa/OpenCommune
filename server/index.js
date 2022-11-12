// server/index.js
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

// Database
const db = require('./src/configs/database.js');

// Test DB
async function checkWorking() {
    try {
      await db.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  
checkWorking();

// Express 
const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Simple Usage (Enable All CORS Requests)
app.use(cors());

// --------------------- Routes ------------------------------------------//
// ListedItems Routes
app.use('/listeditems', require('../server/src/routes/ListedItemRoute'));



//User's endpoint
app.post("/user/register",(req, res) => {

    username = req.body.username
    email = req.body.email
    firstname = req.body.firstname
    lastname = req.body.lastname
    password = req.body.password
        
    newUser = {username, email, firstname, lastname, password}

    msg = db.register(newUser, res)
    
});

app.post("/user/login",(req, res) => {
    username = req.body.username
    password = req.body.password

    db.login(username, password, res)
});

app.post("/user/contact",(req, res) => {
    userid = req.body.userid

    db.contact(userid, res)
});


