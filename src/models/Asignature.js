const mongoose = require('mongoose');
const { Schema } = mongoose;

const Asignature = new Schema({
    code:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Asignature', Asignature);
