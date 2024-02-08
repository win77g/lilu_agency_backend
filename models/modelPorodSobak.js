const mongoose = require("mongoose");



// model MainCategory
const PorodSobakSchema = new mongoose.Schema({
  name: {type: String},
 
 
  
},{ timestamps: true },
)



// Creating model objects
const PorodSobak = mongoose.model("PorodSobak", PorodSobakSchema);

module.exports = PorodSobak;