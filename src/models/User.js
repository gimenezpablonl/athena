const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const User = new Schema({
    username : String,
    password : String,
    email: String,
    record_number : Number
});

User.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  };
  
User.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
module.exports = mongoose.model('User', User);
