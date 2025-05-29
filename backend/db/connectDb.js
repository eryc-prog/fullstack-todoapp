import mongo from "mongoose";

// TO DO: create dotenv file and add the port number and mongo uri
const MONGO_URI =
  "mongodb+srv://upliftjem:jem123@cluster0.uou8sgf.mongodb.net/new-todo-app";

const connectDb = async () => {
  try {
    await mongo.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    // Exit process with failure
    // This is important to prevent the server from running if the database connection fails
    process.exit(1);
  }
};

export default connectDb;
