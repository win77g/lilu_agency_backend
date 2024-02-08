const mongoose = require("mongoose");



// model MainCategory
const PorodOtherSchema = new mongoose.Schema({
  name: {type: String},
 
 
  
},{ timestamps: true },
)



// Creating model objects
const PorodOther = mongoose.model("PorodOther", PorodOtherSchema);

module.exports = PorodOther;