const mongoose = require('mongoose');
const { Schema } = mongoose;

const Student = new Schema({
    record_number : Number,
    name : String,
    last_name : String,
	dni : String,
    classroom : String
});

module.exports = mongoose.model('Student', Student);