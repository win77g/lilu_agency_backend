const mongoose = require("mongoose");



// model MainCategory
const PorodGrizunSchema = new mongoose.Schema({
  name: {type: String},
 
 
  
},{ timestamps: true },
)



// Creating model objects
const PorodGrizun = mongoose.model("PorodGrizun", PorodGrizunSchema);

module.exports = PorodGrizun;