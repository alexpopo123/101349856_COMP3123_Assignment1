const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    primaryKey: true,
    maxLength: 100,
  },
  email: {
    type: String,
    required: true,
    unique: true, 
    maxLength: 50,
  },
  password: {
    type: String,
    required: true,
    maxLength: 50,
  },
})

const User = mongoose.model("User", UserSchema);
module.exports = User;