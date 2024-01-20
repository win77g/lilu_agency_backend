const mongoose = require("mongoose");



// model MainCategory
const ServiceSchema = new mongoose.Schema({
  title: {type: String},
  text : {type: String},
  icon : {type: String},
  
})


 


// Creating model objects
const Service = mongoose.model("Service", ServiceSchema);

module.exports = Service;