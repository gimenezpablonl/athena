const mongoose = require('mongoose');
const { Schema } = mongoose;

const Headmaster = new Schema({
    record_number : Number,
    name : String,
    last_name : String,
	dni : String,
});

module.exports = mongoose.model('Headmaster', Headmaster);
