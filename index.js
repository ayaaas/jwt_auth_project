import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import loginRoute from "./routes/login_routes.js";

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(loginRoute);

mongoose
  .connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running ....");
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });

