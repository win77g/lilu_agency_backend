const mongoose = require("mongoose");



// model MainCategory
const PorodGospodarSchema = new mongoose.Schema({
  name: {type: String},
 
 
  
},{ timestamps: true },
)



// Creating model objects
const PorodGospodar = mongoose.model("PorodGospodar", PorodGospodarSchema);

module.exports = PorodGospodar;