const bcrypt = require("bcrypt");
const UserModel = require("../models/models.users");
const jwt = require("jsonwebtoken");
const { validateRegister, validateLogin } = require("../validation/validator");
const dotenv = require("dotenv");
dotenv.config();
const register = async (req, res) => {
  const { errors, isvalid } = validateRegister(req.body);
  try {
    if (isvalid == false) {
      res.status(404).json(errors);
    } else {
      UserModel.findOne({ email: req.body.email }).then(async (user) => {
        const hash = bcrypt.hashSync(req.body.password, 10);
        !user
          ? ((req.body.password = hash),
            await UserModel.create(req.body),
            res.status(200).json({ message: "User registered successfully" }))
          : ((errors.email = "user exists"), res.status(404).json(errors));
      });
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};
const login = async (req, res) => {
  const { errors, isvalid } = validateLogin(req.body);
  if (isvalid) {
    try {
      await UserModel.findOne({ email: req.body.email }).then((user) => {
        if (user) {
          bcrypt.compare(user.password, req.body.password).then((bool) => {
            if (!bool) {
              const Token = jwt.sign(
                {
                  id: user._id,
                  name: user.name,
                  email: user.email,
                  role: user.role,
                },
                process.env.PRIVATE_KEY,
                { expiresIn: "1h" }
              );
              res
                .status(200)
                .json({ message: "user logged successfully", Token: Token });
            } else {
              errors.password = "incorrect password";
              res.status(404).json(errors);
            }
          });
        } else {
          errors.email = "user not found";
          res.status(404).json(errors);
        }
      });
    } catch (error) {
      res.status(404).json(error.message);
    }
  } else {
    res.status(404).json(errors);
  }
};

const Admin=(req,res)=>{
  res.send('Admin')
}
const User=(req,res)=>{
  res.send('User')
}
module.exports = { register, login, Admin , User};
