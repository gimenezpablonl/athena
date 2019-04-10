const mongoose = require('mongoose');
const { Schema } = mongoose;

const Classroom = new Schema({
    code: String,
    asignatures: Array
});

module.exports = mongoose.model('Classroom', Classroom);