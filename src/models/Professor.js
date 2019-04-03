const mongoose = require('mongoose');
const { Schema } = mongoose;

const Professor = new Schema({
    record_number : Number,
    name : String,
    last_name : String,
	dni : String,
	charge : Array
});

module.exports = mongoose.model('Professor', Professor);