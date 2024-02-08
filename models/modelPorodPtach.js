const mongoose = require("mongoose");



// model MainCategory
const PorodPtachSchema = new mongoose.Schema({
  name: {type: String},
 
 
  
},{ timestamps: true },
)



// Creating model objects
const PorodPtach = mongoose.model("PorodPtach", PorodPtachSchema);

module.exports = PorodPtach;