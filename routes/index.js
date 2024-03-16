var express = require("express");
const {
  register,
  login,
  Admin,
  User,
} = require("../Conrollers/users.Controllers");
var router = express.Router();
const passport = require("passport");
const { inRole , ROLES} = require("../security/RoleMiddleware");
/* GET home page. */
router.post("/register", register);
router.post("/login", login);
router.get(
  "/Admin",
  passport.authenticate("jwt", { session: false }),
  inRole(ROLES.ADMIN),
  Admin
);
router.get(
  "/User",
  passport.authenticate("jwt", { session: false }),
  inRole(ROLES.USER),
  User
);
module.exports = router;
