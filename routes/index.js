var express = require("express");
const { register } = require("../Conrollers/users.Controllers");
var router = express.Router();
/* GET home page. */
router.post("/register", register);

module.exports = router;
