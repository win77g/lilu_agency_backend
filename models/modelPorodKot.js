const mongoose = require("mongoose");



// model MainCategory
const PorodKotSchema = new mongoose.Schema({
  name: {type: String},
 }
)



// Creating model objects
const PorodKot = mongoose.model("PorodKot", PorodKotSchema);

module.exports = PorodKot;