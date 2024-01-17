const mongoose = require("mongoose");
var convert = require('cyrillic-to-latin')


// model MainCategory
const BlogSchema = new mongoose.Schema({
  title: {type: String},
  short_text: {type: String},
  main_text : {type: String},
  image: [{type: String}],
  slug: {type:String},
  
},{ timestamps: true },)

if(this.title){
  BlogSchema.pre('save', function(next) {
    this.slug = convert(this.title);
    next();
  });
}

 
// function to slugify a name


// Creating model objects
const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;