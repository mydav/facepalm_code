const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
require('dotenv').config();
const bodyParser = require('body-parser');

const mssgRouter = require('./routes/mssg.js');


const mssg = require('./models/mssg.js');

mongoose.connect("mongodb://127.0.0.1:27017/test", {useNewUrlParser: true})
    .then(db => console.log("CONECTED", db), err => console.log("ERROR", err));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', mssgRouter)


app.listen(3001, function(){
    console.log("Listening on port 3001!")
  });