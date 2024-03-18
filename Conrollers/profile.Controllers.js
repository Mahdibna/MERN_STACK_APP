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
  console.log(req.user.id);
  try {
    await ProfileModel.findOne({ user: req.user.id }).then(async (profile) => {
      if (!profile) {
        req.body.user = req.user._id;
        const { errors, isValid } = validateProfile(req.body);
        if (isValid) {
          await ProfileModel.create(req.body);
          return res
            .status(201)
            .json({ message: "Profile created successfully" });
        } else {
          return res.status(404).json(errors);
        }
      } else {
        await ProfileModel.findOneAndUpdate({ user: profile.user }, req.body, {
          new: true,
        }).then((updated_Profile) => {
          res.status(200).json(updated_Profile);
        });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const getAllProfiles = async (req, res) => {
  try {
    await ProfileModel.find()
      .populate("user", ["email", "password", "role"])
      .then((data) => res.status(200).json(data));
  } catch (error) {
    console.log(error);
  }
};
const getProfile = async (req, res) => {
  try {
    await ProfileModel.findOne({ user: req.user._id })
      .populate("user", ["email", "password", "role"])
      .then((profile) => {
        if (!profile) {
          res.status(404).send("profile not found");
        } else {
          res.send(profile);
        }
      });
  } catch (error) {
    console.log(error);
  }
};

const deleteProfile = async (req, res) => {
  const id = req.params.id;
  await ProfileModel.deleteOne({ user: id })
    .then((result) => {
      if (result.deletedCount > 0) {
        res.status(200).json({ message: "User deleted successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((error) => {
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
