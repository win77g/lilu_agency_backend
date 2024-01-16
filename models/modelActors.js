const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
var convert = require('cyrillic-to-latin')

const ActorsSchema =  new mongoose.Schema({
  clientId:{ type: String },
  name :{ type: String },
  image :[{type: String,required: true,}],
  pol :{ type: String },
  rod :{ type: String },
  poroda :{ type: String },
  birthday :{ type: String },
  ves :{ type: String },
  kupirovanie :{ type: String },
  alergia :{ type: String },
  sostzdorovia :{ type: String },
  privivki :{ type: String },
  instogram :{ type: String },
  facebook :{ type: String },
  tiktok :{ type: String },
  twitter :{ type: String },
  website :{ type: String },
  education :{ type: String },
  naviki :{ type: String },
  slug :{ type: String },
  video :{ type: String },
  comments :{ type: String },
  active:{type: String},
  },
 
    { timestamps: true },
)

ActorsSchema.pre('save', function(next) {
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
ActorsSchema.plugin(mongoosePaginate);
// declare a mongoose document based on a Typescript interface representing your schema


const Actors = mongoose.model("Actors", ActorsSchema);



module.exports = Actors;