const express = require('express');
const router = express.Router();
const db = require('../configs/database');
const RentalHistory = require('../models/RentalHistory');

// Test Route
router.get('/', (req, res) => res.send('Rental History Test Route.'));

// Create a new entry 
router.post("/create", async (req, res) => {
    let { daterented, datetoreturn, state, itemid, userlisted, renter } = req.body; 

    // Create rental model
    const rental = {
        daterented: daterented, 
        datetoreturn: datetoreturn, 
        state: state, 
        itemid: itemid,
        userlisted: userlisted, 
        renter:renter
    };

    // Create new entry to db
    try {
         // Debug
        console.log(rental);
        const result = await RentalHistory.createRental(rental);
        console.log(result);
        res.sendStatus(200); // 200 code
    }
    catch(e) {
        console.log(e);
        res.send("Error adding rental to database.");
    }
});

// Get a rental by id 
router.get("/getbyid", async(req, res) => {
    const {rentalid} = req.body;
    
    try {
        // const rental = await RentalHistory.findOne({ where: { rentalid: rentalid }});
        const rental = await RentalHistory.RentalHistory.findOne( { where: { rentalid: rentalid } });
        if (rental === null) {
            res.send("No Rental Found.");
        }
        else {
            res.send(rental);
            res.sendStatus(200);
        }
    } catch(e) {
        console.log(e);
    }
});

// Get all rentals items from the database. 
router.get('/getAllRentals', (req, res) => 
    // Not sure why it's like this but it works 
    RentalHistory.RentalHistory.findAll()
        .then(r => {
            console.log(r);
            res.send(r)
            res.sendStatus(200);
        })
        .catch(err => console.log(err)));
    
// Update by id 
router.put("/updatebyid", async(req, res) => {
    const { rentalid, daterented, datetoreturn, state, itemid, userlisted, renter } = req.body; 

    // const oldRentalInfo = await RentalHistory.RentalHistory.findOne({ where: { rentalid: rentalid }});

    const newRentalInfo = {
        rentalid: rentalid,
        daterented: daterented,
        datetoreturn: datetoreturn,
        state: state, 
        itemid: itemid,
        userlisted: userlisted,
        renter:renter
    };

    try {
        // Update
        await RentalHistory.RentalHistory.update(newRentalInfo, {where: { rentalid: rentalid}});
        
        // Show updated data
        res.send(newRentalInfo);
    } catch(e) {
        console.log(e);
    }
});

// Delete by id
router.delete("/deletebyid", async(req, res) => {
    const { rentalid } = req.body;

    try {
        // If ID exists, delete. Otherwise, give an error.
        const r = await RentalHistory.RentalHistory.destroy({where: { rentalid: rentalid}});
        if (r) {
            res.send("Rental Entry was deleted.")
        } else {
            res.send("Rental Entry was not deleted or rental does not exist.")
        }
    } catch(e) {
        console.log(e);
    }
});

// Export Router
module.exports = router; 