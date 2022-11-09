// server/index.js

const express = require("express");
var cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();

const db = require('./database');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Simple Usage (Enable All CORS Requests)
app.use(cors());


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


// Endpoints
app.get("/api", (req, res) => {
    res.json({message:"Hello from server!"});
});

// network endpoints 
// TODO
//  network/edit
//  network/join

// create network
app.post("/network", (req, res) => {
    networkname = req.body.networkname
    networkadmin = req.body.networkadmin 

    newNetwork = {networkname, networkadmin, res}

    db.createNetwork(newNetwork, res)
});

// delete network
app.delete("/network/delete", (req, res) => {
    networkname = req.body.networkname 

    toDelete = {networkname, res}

    db.deleteNetwork(toDelete, res)
});

// edit network: network name and/or network admin
app.put("/network/edit", (req, res) => {
    networkname = req.body.networkname 
    newNetworkname = req.body.newNetworkname 
    currentAdmin = req.body.currentAdmin 
    newAdmin = req.body.newAdmin 

    update = {networkname, newNetworkname, currentAdmin, newAdmin, res}

    db.editNetwork(update, res)
});

// join network
app.post("/network/join", (req, res) => {
    networkname = req.body.networkname
    user = req.body.user

    join = {networkname, user, res}

    db.joinNetwork(join, res)
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

