const { connectDB, mongoose } = require('./db');
const { User } = require('./Models/User');
const { Task } = require('./Models/Task');

async function main (){
  await connectDB(); //connect to the database

  // //CREATE
  // const john = await User.create({name: "John Wachira", email: "john@gmail.com"});  
  // console.log("Created: ", john);


  // // //READ
  // const users = await user.find().select{"name email"}; //find all users
  // console.log("All Users:", users);

  // //UPDATE
  //  await User.updateOne({ email: "john@plp.com"}, { role: "admin"});
  //   console.log("Updated John's role")


  //DELETE
  // await User.deleteOne({email: "john@gmail.com"});
  // console.log("john Deleted");
  
  //AGGREGATION
  const byStatus = await Task.aggregate([
    {$group: {_id: "$status", total: {$sum: 10}}}
  ]);
  console.log("Tasks by Status:", byStatus);

  await mongoose.disconnect(); //close the database connection
}
main();