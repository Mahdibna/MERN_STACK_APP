var express = require("express");
const {
  register,
  login,
  Admin,
  User
} = require("../Conrollers/users.Controllers");
const {
 create_profile,getAllProfiles,getProfile,deleteProfile
} = require("../Conrollers/profile.Controllers");
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
router.post(
  "/profiles",
  passport.authenticate("jwt", { session: false }),
  create_profile
);
router.get(
  "/profiles",
  passport.authenticate("jwt", { session: false }),
  inRole(ROLES.ADMIN),
  getAllProfiles,
);
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  getProfile
);
router.delete('/profile/:id', passport.authenticate("jwt", { session: false }),inRole(ROLES.ADMIN),deleteProfile)
module.exports = router;
