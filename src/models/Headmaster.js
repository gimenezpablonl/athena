const mongoose = require('mongoose');
const { Schema } = mongoose;

const Headmaster = new Schema({
    record_number:{
        type: Number,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
	dni:{
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Headmaster', Headmaster);
