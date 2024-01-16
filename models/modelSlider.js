const mongoose = require("mongoose");
var convert = require('cyrillic-to-latin')


// model MainCategory
const SliderSchema = new mongoose.Schema({
  name: {type: String},
  slug: {type: String},
  position : {type: String},
  image: [{type: String}],
  activ : {type: String},
  
})

SliderSchema.pre('save', function(next) {
  this.slug = convert(this.name);
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
const Slider = mongoose.model("Slider", SliderSchema);

module.exports = Slider;