var express = require("express");
var path = require("path");
var passport = require("passport");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
var indexRouter = require("./routes/index");
const mongoose = require("mongoose");
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
require("./security/passport")(passport);
app.use("/api", indexRouter);
mongoose
  .connect(process.env.URL)
  .then(() => console.log("connect to the db succesfuly"))
  .catch(() => console.log("error to connect"));
module.exports = app;
