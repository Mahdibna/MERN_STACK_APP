const mongoose = require("mongoose");
const schema = mongoose.Schema;
const ProfileModel = new schema(
  {
    id:{
        type:"String",
        trim:true,
        required:true
    },
    name: {
        type:"String",
        trim:true,
    },
    last_name:{
        type:"String",
        trim:true,
    },
    tel_number:{
        type:"String",
        trim:true,
    },
    email: {
      type: "string",
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Profile", ProfileModel);
