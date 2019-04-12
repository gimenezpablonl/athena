const mongoose = require('mongoose');
const { Schema } = mongoose;

const Classroom = new Schema({
    code:{
        type: String,
        required: true,
        unique: true
    },
    asignatures:{
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('Classroom', Classroom);