const mongoose = require("mongoose");



// model MainCategory
const SecondBlockSchema = new mongoose.Schema({
  
    title : {type: String},
    description : {type: String},
    image : {type: String},
    plus : {type: String},
    plus1 : {type: String},
    plus2 : {type: String},
    plus3 : {type: String},
    image : {type: String},
    slug : {type: String},
    video : {type: String},

  
})

SecondBlockSchema.pre('save', function(next) {
  this.slug = slugify(this.name);
  next();
});
 
// function to slugify a name
function slugify(text) {
  return text.toString().toLowerCase()
              .replace(/\s+/g, '-')           // Replace spaces with -
              .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
              .replace(/\-\-+/g, '-')         // Replace multiple - with single -
              .replace(/^-+/, '')             // Trim - from start of text
              .replace(/-+$/, '');            // Trim - from end of text
}

// Creating model objects
const SecondBlock = mongoose.model("SecondBlock", SecondBlockSchema);

module.exports = SecondBlock;