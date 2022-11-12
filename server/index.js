// server/index.js
const express = require('express');
var cors = require('cors');

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple Usage (Enable All CORS Requests)
app.use(cors());

// network route
const netRouter = require('./src/routes/network-routes') 

app.use("/network", netRouter); 
