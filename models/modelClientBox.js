const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const Date = mongoose.Schema({
  year: {type: Number},
  month: {type: Number},
  day: {type: Number},
  
})

const Animals = mongoose.Schema({
  clientId:{ type: String },
  name :{ type: String},
  zodiak:{ type: String },
  image :[{type: String}],
  pol :{ type: String },
  rod :{ type: String },
  poroda :{ type: String },
  birthday :{type: Date,set: a => a === '' ? undefined : a},
  ves :{ type: String },
  kupirovanie :{ type: String },
  alergia :{ type: String },
  sostzdorovia :{ type: String },
  privivki :{ type: String },
  instagram :{ type: String },
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
},{ timestamps: true },)

const Profile = mongoose.Schema({
  name: {type: String},
  city: {type: String},
  email: {type:String},
  phone: {type:String},
  phone2: {type:String},
})

const ClientBoxSchema =  new mongoose.Schema({
  _uidFirebase: { type: String },
  _email: { type: String },
  _city: { type: String },
  _phone: { type: String },
  _animals: [{ type: Animals }],
  _profil: { type: Profile },
  },
 
    { timestamps: true },
)

ClientBoxSchema.plugin(mongoosePaginate);

const ClientBox = mongoose.model("ClientBox", ClientBoxSchema);

module.exports = ClientBox;