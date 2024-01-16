const mongoose = require("mongoose");



// model MainCategory
const PolSchema = new mongoose.Schema({
  name: {type: String},
  slug: {type: String},
 
  
})

PolSchema.pre('save', function(next) {
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
const Pol = mongoose.model("Pol", PolSchema);

module.exports = Pol;