// create HTTP server

import exp from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import UserApp from "./APIs/UserAPIs.js"
import cors from 'cors'
//Read environment variables
config();
//create HTTp server
const app = exp();


app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://week8-usermanagement-h18b.vercel.app/"
  ],
  credentials: true
}));
// Body parser middleware
app.use(exp.json());
// Forward request to userApi
 app.use("/user-api", UserApp)


// Connect to Database
async function connectDB() {
  const mongoUrl = process.env.DB_URL;
  if (!mongoUrl) {
    console.error("Missing required environment variable DB_URL.");
    console.error("Set DB_URL in Render service settings or your .env file.");
    process.exit(1);
  }

  try {
    await connect(mongoUrl);
    console.log("Connected to DB");

    const port = process.env.PORT;

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error("Error in DB connection:", err.message);
    process.exit(1);
  }
}

connectDB();

// Error handling middleware

app.use((err, req, res, next) => {
  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  res.status(500).json({
    message: "Internal Server Error",
  });
});