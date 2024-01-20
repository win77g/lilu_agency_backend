const mongoose = require("mongoose");
var convert = require('cyrillic-to-latin')


// model MainCategory
const ReviewSchema = new mongoose.Schema({
  name: {type: String},
  slug: {type: String},
  position : {type: String},
  image: [{type: String}],
  text1 : {type: String},
  text2 : {type: String},
})

ReviewSchema.pre('save', function(next) {
  this.slug = convert(this.name);
  next();
});
 


// Creating model objects
const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;