var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
const UserModel = require("../models/models.users");
const env = require("dotenv");
env.config();
opts.secretOrKey = process.env.PRIVATE_KEY;
module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
      UserModel.findOne({ _id: jwt_payload.id })
        .then((user) => {
          if (user) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        })
        .catch((err) => console.log(err));
    })
  );
};
