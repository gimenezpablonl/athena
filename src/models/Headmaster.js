const mongoose = require('mongoose');
const { Schema } = mongoose;

const Headmaster = new Schema({
    record_number:{
        type: Number,
        unique: true
    },
    name: String,
    last_name: String,
	dni:{
        type: String,
        unique: true
    }
});

module.exports = mongoose.model('Headmaster', Headmaster);
