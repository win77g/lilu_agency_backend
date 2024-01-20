const mongoose = require("mongoose");
var convert = require('cyrillic-to-latin')


// model MainCategory
const ImageServiceSchema = new mongoose.Schema({
  
  image: [{type: String}],
  
  
})



// Creating model objects
const ImageService = mongoose.model("ImageService", ImageServiceSchema);

module.exports = ImageService;