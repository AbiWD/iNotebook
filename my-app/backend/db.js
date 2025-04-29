const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://abhilashbangera97:abhilashbangera97@inotebook.kevw0wt.mongodb.net/?retryWrites=true&w=majority&appName=iNotebook";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("✅ Connected to Mongo successfully!!");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1); // optional: kill app if DB isn't connected
  }
};

module.exports = connectToMongo;
