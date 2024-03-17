const ProfileModel = require("../models/models.profile");
const jwt = require("jsonwebtoken");
const {
  validateRegister,
  validateLogin,
  validateProfile,
} = require("../validation/validator");
const dotenv = require("dotenv");
dotenv.config();
const create_profile = async (req, res) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1];
    const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    const profile = await ProfileModel.findOne({ email: decoded.email });
    if (!profile) {
      profileData = req.body;
      profileData.id = decoded.id;
      profileData.email = decoded.email;
      const { errors, isValid } = validateProfile(profileData);
      if (isValid) {
        await ProfileModel.create(profileData);
        return res
          .status(201)
          .json({ message: "Profile created successfully" });
      }else {
        return res.status(400).json(errors);
      }
    } else {
      return res.status(409).json({ message: "Profile already exists" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getAllProfiles = async (req, res) => {
  let data = await ProfileModel.find();
  console.log(data);
};
const getProfile = async (req, res) => {
  const token = req.headers.authorization.split("Bearer ")[1];
  const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
  const profile = await ProfileModel.findOne({ email: decoded.email });
  if (!profile) {
    res.status(404).send("profile not found");
  } else {
    res.send(profile);
  }
};

const deleteProfile = (req, res) => {
  const id = req.params.id;
  ProfileModel.deleteOne({ id: id }).then((result) => {
    if (result.deletedCount > 0) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }).catch((error) => {
    console.error("Error deleting profile:", error);
    res.status(500).json({ message: "A problem occurred during deletion" });
  });
};

module.exports = {
  
  create_profile,
  getAllProfiles,
  getProfile,
  deleteProfile,
};
