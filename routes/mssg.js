const express = require('express');
const mongoose = require('mongoose');
const mssgSchema = require('../models/mssg.js');

const newRouter = express.Router();

newRouter.get('/', (req, res) => {
   
    mssgs = mssgSchema.find({}) 
    res.json(mssgs);
});

module.exports = newRouter;

