// server/index.js

const express = require("express");
var cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();

const db = require('./database');
const itemRouter = require('./routes/item-routes')

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

app.use("/item", itemRouter);

// Endpoints
app.get("/api", (req, res) => {
    res.json({message:"Hello from server!"});
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

