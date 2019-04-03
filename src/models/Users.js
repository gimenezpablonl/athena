const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
    user : String,
    password : String,
    record_number : String,
    position : String
});

module.exports =mongoose.model('User', User);
