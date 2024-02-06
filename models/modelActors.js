const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
var convert = require('cyrillic-to-latin')

const Date = mongoose.Schema({
  year: {type: Number},
  month: {type: Number},
  day: {type: Number},
  
})

const ActorsSchema =  new mongoose.Schema({
      clientId: {type: String},
      name: {type: String},
      slug : {type: String},
      pol: {type: String},
      rod: {type: String},
      poroda: {type: String},
      birthday: {type: Date,set: a => a === '' ? undefined : a},
      vidPolaDoPlecha: {type: String},
      vidPolaDoMakuski: {type: String},
      vidGoloviDoHvosta: {type: String},
      obhvatGrudi: {type: String},
      shei: {type: String},
      ves: {type: String}, 
      kupirovanie : {type: String}, 
      sostzdorovia: {type: String},
      alergia: {type: String},
      food: {type: String},
      privivki: {type: String},
      instagram: {type: String}, 
      facebook : {type: String},
      tiktok : {type: String},
      schastie : {type: String},
      naviki: {type: String},
      obmejenia : {type: String},
      opis : {type: String},
      spivpraca : {type: String},
      siemki : {type: String},
      image :[{type: String,required: true,}],
      active:{type: String},
  },
 
    { timestamps: true },
)

ActorsSchema.pre('save', function(next) {
  this.slug = convert(this.name);
  next();
});
 





// Creating model objects
ActorsSchema.plugin(mongoosePaginate);
// declare a mongoose document based on a Typescript interface representing your schema


const Actors = mongoose.model("Actors", ActorsSchema);



module.exports = Actors;