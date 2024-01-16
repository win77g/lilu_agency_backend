const mongoose = require("mongoose");
var convert = require('cyrillic-to-latin')


// model MainCategory
const RodSchema = new mongoose.Schema({
  name: {type: String},
  slug: {type: String},
 
  
})

RodSchema.pre('save', function(next) {
  this.slug = convert(this.name);
  console.log('15',this.slug ,this.name)
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
const Rod = mongoose.model("Rod", RodSchema);

module.exports = Rod;