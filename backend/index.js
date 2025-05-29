// create a simple express server

// import libraries first
import express from "express";
// cors is a middleware that allows you to specify which domains are allowed to access your server
import cors from "cors";
import helmet from "helmet"; // security middleware

// connect to the database
import connectDb from "./db/connectDb.js";

// import routes
import taskRouter from "./routes/taskRouter.js";
// import userRouter from './routes/userRouter.js'

connectDb();

const app = express();

// TO DO: create dotenv file and add the port number
const PORT = 8000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// endpoints
// use for development environment
app.use("/api/v1/tasks", taskRouter);
// app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
