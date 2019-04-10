const mongoose = require('mongoose');
const { Schema } = mongoose;

const Professor = new Schema({
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
	classroom_list : Array
});

module.exports = mongoose.model('Professor', Professor);
