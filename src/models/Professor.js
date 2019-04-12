const mongoose = require('mongoose');
const { Schema } = mongoose;

const Professor = new Schema({
    record_number:{
        type: Number,
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
    },
    sex:{
        type: Boolean,
        required: true
    },
    birthday:{
        type: Date,
        required: true
    },
	asignature_list: Array
});

module.exports = mongoose.model('Professor', Professor);
