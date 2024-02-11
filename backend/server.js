const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const userRouter = require("./routers/userRoutes")

const cors = require("cors");
app.use(cors());

app.use(express.json());

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("mongoDB conneted successfully");
    app.listen(process.env.PORT || 8000, (err) => {
      if (err) {
        console.log("there is amn errror while connecting");
      } else {
        console.log("server started on port: " + process.env.PORT);
      }
    });
  })
  .catch((error) => {
    console.log(error, "error found");
  });

  app.use(userRouter)
