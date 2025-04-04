// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js"; // ✅ Correct import

dotenv.config({
  path: "./.env",
});


connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is listening on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection error", err);
  });

/*
import express from "express";
const app = express()
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
    throw error;
  }
});
*/
