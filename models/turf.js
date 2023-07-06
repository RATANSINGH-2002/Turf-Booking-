const mongoose = require("mongoose");
const turfschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rating:{
    type: Number,
    required: true,
  },
  price:{
    type: String,
    required: true,
  },
  // url:{
  //   type: String,
  //   validate: {
  //     validator: function(url) {
  //       const pattern = /^https?:\/\/[^\s/$.?#].[^\s]*$/i;
  //       return pattern.test(url);
  //     },
  //     message: 'Invalid URL'
  //   }
  // }
});

const Turf = mongoose.model("Turf", turfschema);

module.exports = Turf;
