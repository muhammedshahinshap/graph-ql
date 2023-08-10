const mongoose = require("mongoose");
module.exports.connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect("mongodb://127.0.0.1:27017/admin");
    let dbconn = mongoose.connection;
    dbconn.on("error", console.error.bind(console, "connection error:"));
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
