const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const Animals = mongoose.Schema({
  clientId:{ type: String },
  name :{ type: String ,required: true,},
  zodiak:{ type: String },
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
},{ timestamps: true },)

const Profile = mongoose.Schema({
  name: {type: String},
  surname: {type: String},
  city: {type: String},
  street: {type: String},
  email: {type:String},
  phone: {type:String},
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