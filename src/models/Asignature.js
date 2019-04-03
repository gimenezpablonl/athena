const mongoose = require('mongoose');
const { Schema } = mongoose;

const Asignature = new Schema({
    code : String,
    name : String,
    year : Number
});

module.exports = mongoose.model('Asignature', Asignature);
