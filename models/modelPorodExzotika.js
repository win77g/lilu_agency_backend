const mongoose = require("mongoose");



// model MainCategory
const PorodExotikaSchema = new mongoose.Schema({
  name: {type: String},
 
 
  
},{ timestamps: true },
)



// Creating model objects
const PorodExotika = mongoose.model("PorodExotika", PorodExotikaSchema);

module.exports = PorodExotika;