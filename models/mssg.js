const mongoose = require('mongoose');

const mssgSchema = new mongoose.Schema(

    {
        from: String,
        to: String,
        mssg: String

    }
)

module.exports = mongoose.model('mssgs', mssgSchema); 