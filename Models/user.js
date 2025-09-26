const {mongoose} = require('..db'); //import mongoose from db.js
const {Schema} = mongoose; //destructure Schema from mongoose

const userSchema = new Schema({
  name: String,
  email: {type:String, required: true, unique: true},
  role: {type: String, default:"user"},
  
} {timestaps: true })

const user = mongoose.model('User', userSchema)
module.exports = {user};