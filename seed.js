const { connectDB, mongoose } = require('./db'); //import connectDB and mongoose from db.js
const { user } = require('./Models/user');
const { task } = require('./Models/task');


ASYNC function main(){
  await connectDB(); //connect to the database
  await userdeleteMany({}); //delete all users
  await task.deleteMany({}); //delete all tasks

  users = await user.instertMany([
    {name: "Alice Kriuki", email: "alice@gmai.com", role: "admin"},
    {name: "Bob Njoroge", email: "bob@gmail.com"}
  ])
await task.insertMany([
  {title: "Write Proposal", status: "to do", owner: "Alice"},  
  {title: "Design Schema", status: "in_progress", owner: "Bob"},
  
])
console.log("Database Seeded Successfully");
await mongoose.disconnect(); //close the database connection

} 

main();