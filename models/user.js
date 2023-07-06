const mongoose = require("mongoose")

const userschema = mongoose.Schema({
  first: {
    type: String,
    required: true,
  },
  last: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  cpassword: {
    type: String,
    required: true,
  },
});

//model
const User = mongoose.model("User", userschema);
module.exports = User;
