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

// RentalHistory Route
app.use('/rentalhistory', require('../server/src/routes/RentalHistoryRoute'));

//User's Routes
app.use('/user', require('../server/src/routes/UserRoute'));

// Network routes
app.use("/network", require('./src/routes/network-routes')); 