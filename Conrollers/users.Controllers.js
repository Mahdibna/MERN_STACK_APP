const bcrypt=require('bcrypt');
const UserModel = require("../models/models.users");
const validateRegister=require('../validation/validator');
const register = async (req, res) => {
  const {errors , isvalid} =validateRegister(req.body);
  try {
    if( isvalid==false){
      res.status(404).json(errors);
    }else {
      UserModel.findOne({ email: req.body.email }).then(async (user) => {
        const hash = bcrypt.hashSync(req.body.password, 10);
          !user ? (
              req.body.role = "USER",
              req.body.password=hash,
              await UserModel.create(req.body),
              res.status(200).json({ message: "User registered successfully" })
          ) : (
            errors.email='user exists',
              res.status(404).json(errors)
          )
      })
  }
  
    
  } catch (error) {
    res.status(404).json(error.message);
  }
};
module.exports = { register };
