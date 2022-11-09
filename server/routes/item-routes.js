const express = require('express');
const router = express.Router();
const db = require('../database');

// Item Endpoints
router.get("/search",async (req, res) => {
    const { itemname } = req.body;
    console.log(itemname)
    try {    
        const result = await db.searchItem(itemname);
        console.log(result);
        res.send(result)
    } catch(e) {
        console.log(e);
    }
});

router.post("/create", async (req, res) => {
    const { itemname, category, information, price, location, image, userlisted } = req.body.item;

    item = {
        itemname: itemname,
        category: category,
        information: information,
        price: price,
        location: location,
        image: image,
        userlisted: userlisted
    }
    try {
        console.log(req.body)
        const result = await db.createItem(item);
        console.log(result);
    } catch(e) {
        console.log(e);
    }
});
router.put("/edit", async (req, res) => {
    const { itemid, itemname, category, information, price, location, image, userlisted } = req.body.item;

    item = {
        itemid: itemid,
        itemname: itemname,
        category: category,
        information: information,
        price: price,
        location: location,
        image: image,
        userlisted: userlisted
    }
    console.log(item);
    try {
        const result = await db.updateItem(item)
        res.send(item)
    } catch(e) {
        console.log(e);
    }
});
router.delete("/delete", async (req, res) => {
    const { itemid, itemname, userlisted } = req.body;
    try {
        const result = await db.deleteItem(itemid, itemname, userlisted);
    } catch(e) {
        console.log(e);
    }


});

module.exports = router;
