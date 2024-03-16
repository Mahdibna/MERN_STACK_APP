const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserModel = new schema(
  {
    name: "string",
    email: {
      type: "string",
      unique: true,
      trim: true,
    },
    password: "string",
    confirm: "string",

    role: "string",
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("users", UserModel);
