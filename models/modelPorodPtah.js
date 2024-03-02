const mongoose = require("mongoose");



// model MainCategory
const PorodPtahSchema = new mongoose.Schema({
  name: {type: String},
 }
)



// Creating model objects
const PorodPtah = mongoose.model("PorodPtah", PorodPtahSchema);

module.exports = PorodPtah;