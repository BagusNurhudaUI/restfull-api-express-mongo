const express = require('express');
const Model = require('../models/model');
const router = express.Router()

//Post Method
router.post('/post', async (req, res) => {
    console.log(req.body);
    const data = new Model({
        name : req.body.name,
        age : req.body.age
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        console.log(error.message);
        res.status(400).json({message: error.message})
    }
})

router.get('/post', async (req,res) => {
    res.json(await Model.find())
})

//Get all Method
router.post('/test', (req, res) => {
    
    try {
        console.log(req.body);
        res.json({"mess": "running..."})
        
    }
    catch (error) {
        console.log(error.message);
    }
    
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})

//Update by ID Method
router.get('/test', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = router;