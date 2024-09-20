// Application Name : Database System
// Author : Md Shamim Mia
// Technology : Node, Express Js,

// Dependencies
const express = require("express");
const cors = require("cors");
const router = require("./router/routes");

const PORT = process.env.PORT || 4000;
// App Object
const app = express();

// configuration
require("dotenv").config();
// configuration middlewares
app.use(express.json());
app.use(cors());

// middlewares for router
app.use("/", router);

// server start
const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log("server running");
    });
  } catch (err) {
    console.log(err.message);
  }
};

startServer();
