const express = require('express');
const router = express.Router();
const nt = require('../models/Network.js');
const nte = require('../models/NetworkEnrollment.js');

// create a network
router.post("/create", async (req, res) => {
    let { networkname, networkadmin } = req.body;
    
    const network = {
        networkname : networkname,
        networkadmin : networkadmin
    }

    try {
        const result = await nt.createNetwork(network);
        res.sendStatus(200);
    } catch(e) {
        console.log(e)
    }
});

// delete a network
router.delete("/delete", async (req, res) => {
    const { networkname } = req.body;

    const network = {
        networkname : networkname
    }
    try {
        await nt.deleteNetwork(network);
        res.sendStatus(200);
    } catch(e) {
        console.log(e)
    }
});

// edit a network
router.put("/edit", async (req, res) => {
    const { currentNetworkname, newNetworkName, newNetworkAdmin } = req.body;

    const network = {
        currentNetworkname: currentNetworkname,
        newNetworkName: newNetworkName,
        newNetworkAdmin: newNetworkAdmin
    }
    try {
        const result = await nt.editNetwork(network)
        res.send(network)
    } catch(e) {
        console.log(e);
    }
});

// enroll in a network
router.post("/enroll", async (req, res) => {
    const { username, networkname } = req.body;

    const network = {
        username: username,
        networkname: networkname
    }
    try {
        const result = await nte.enrollInNetwork(network);
        res.sendStatus(200);
    } catch(e) {
        console.log(e);
    }
});

module.exports = router;