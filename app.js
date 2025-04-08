const express = require("express");
const cors = require("cors");

const calculatorRoutes = require("./routes/calculatorRoutes");

const app = express();

app.use(cors());

app.options("*", cors());

app.use(express.json());

app.use("/api/calculator", calculatorRoutes);

module.exports = app;
