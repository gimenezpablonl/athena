const mongoose = require('mongoose');
const { Schema } = mongoose;

const Student = new Schema({
    record_number:{
        type: Number,
        unique: true
    },
    name: String,
    last_name: String,
	dni:{
        type: String,
        unique: true
    },
    sex: Boolean,
    birthday: Date
});

module.exports = mongoose.model('Student', Student);