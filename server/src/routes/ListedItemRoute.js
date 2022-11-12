const express = require('express');
const router = express.Router();
const db = require('../configs/database');
const ListedItem = require('../models/ListedItem')

// Test Route
router.get('/', (req, res) => res.send('Listed Item Test Route.'));

// Get all listed items from the database. 
router.get('/getallitems', (req, res) => 
    ListedItem.findAll()
        .then(listeditems => {
            console.log(listeditems);
            res.sendStatus(200);
        })
        .catch(err => console.log(err)));

// Add an item
router.get('/add', (req, res) => {
    const data = {
        itemname: "yeezy shoes",
        category: "clothing",
        information: "A pair of mint Yeezys",
        price: 3.50,
        location: "The Moon",
        image: "https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Core-Black-Red-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1606319240&q=75",
        userlisted: '76123458-5c8b-11ed-9b6a-0242ac120002'
    }   

    let { itemname, category, information, price, location, image, userlisted } = data;

    // Insert into table
    ListedItem.create({
        itemname,
        category,
        information, 
        price, 
        location, 
        image, 
        userlisted
    })
        .then(listeditems => res.redirect('/'))
        .catch(err => console.log(err));
});

// Item Endpoints
router.get("/search",async (req, res) => {
    const { itemname } = req.body;
    console.log(itemname)
    try {    
        const result = await ListedItem.searchItem(itemname);
        console.log(result);
        res.send(result)
    } catch(e) {
        console.log(e);
    }
});

router.post("/create", async (req, res) => {
    let { itemname, category, information, price, location, image, userlisted } = req.body;

    const item = {
        itemname: itemname,
        category: category,
        information: information,
        price: price,
        location: location,
        image: image,
        userlisted: userlisted
    }

    try {
        console.log(item)
        const result = await ListedItem.createItem(item);
        console.log(result);
        res.sendStatus(200); // 200 code
    } catch(e) {
        console.log(e);
        res.sendStatus(404);
    }
});

router.put("/edit", async (req, res) => {
    const { itemid, itemname, category, information, price, location, image, userlisted } = req.body;

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
        const result = await ListedItem.updateItem(item)
        res.send(item)
        res.sendStatus(200); // 200 code
    } catch(e) {
        console.log(e);
        res.sendStatus(404);
    }
});

router.delete("/delete", async (req, res) => {
    const { itemid, itemname, userlisted } = req.body;
    try {
        const result = await ListedItem.deleteItem(itemid, itemname, userlisted);
    } catch(e) {
        console.log(e);
    }
});


module.exports = router;