const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const Animals = mongoose.Schema({
  company: {type: String},
  title: {type: String},
  adsId: {type: String},
  city: {type:String},
  email:{type:String},
  phone: {type:String},
},{ timestamps: true },)

const Profile = mongoose.Schema({
  name: {type: String},
  surname: {type: String},
  city: {type: String},
  email: {type:String},
  phone: {type:String},
})

const ClientBoxSchema =  new mongoose.Schema({
  _uidFarebase: { type: String },
  _email: { type: String },
  _city: { type: String },
  _phone: { type: String },
  _animals: [{ type: Animals }],
  _profil: [{ type: Profile }],
  },
 
    { timestamps: true },
)

ClientBoxSchema.plugin(mongoosePaginate);

const ClientBox = mongoose.model("ClientBox", ClientBoxSchema);

module.exports = ClientBox;