const mongoose = require("mongoose");



// model MainCategory
const PorodPesSchema = new mongoose.Schema({
  name: {type: String},
 }
)



// Creating model objects
const PorodPes = mongoose.model("PorodPes", PorodPesSchema);

module.exports = PorodPes;