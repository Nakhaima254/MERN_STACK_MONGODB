



async function main (){
  await connectDB(); //connect to the database

  //CREATE
  const newUser = await user.create({name: "John Wachira", email: "john@gmai.com"});  
  console.log("New User Created:", newUser);

  //READ
  const users = await user.find().select{"name email"}; //find all users
  console.log("All Users:", users);

  //UPDATE
  await user.updateOne({email: "john@gmail.com"}, {role: "admin"});
  console.log("User Updated", role);

  //DELETE
  await user.deleteOne({email: "john@gmail.com"});
  console.log("User Deleted");
  
  //AGGREGATION
  const byStatus = await TextTrackList.aggregate([
    {$group: {_id: "$status", total: {$sum: 10}}}
  ]);
  console.log("Tasks by Status:", byStatus);

  await mongoose.disconnect(); //close the database connection
}
main();