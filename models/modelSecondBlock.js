const mongoose = require("mongoose");
var convert = require('cyrillic-to-latin')


// model MainCategory
const SecondBlockSchema = new mongoose.Schema({
  
    title : {type: String},
    description : {type: String},
    plus : {type: String},
    plus1 : {type: String},
    plus2 : {type: String},
    plus3 : {type: String},
    image : [{type: String}],
    imageSmail : [{type: String}],
    video : {type: String},

  })


 
// function to slugify a name


// Creating model objects
const SecondBlock = mongoose.model("SecondBlock", SecondBlockSchema);

module.exports = SecondBlock;