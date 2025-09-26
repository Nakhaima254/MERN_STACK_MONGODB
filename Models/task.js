const { mongoose} = require('../db'); //import mongoose from db.js
const {Schema} = mongoose; //destructure Schema from mongoose

const taskSchema = new Schema ({
  title: String,
  status: {type: String, enum: ["todo", "in_progress", "done"], default: "todo"}
    owner:String
}{ timestamps: true})
