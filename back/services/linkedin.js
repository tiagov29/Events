const passport = require("passport");
const linkedinStrategy = require("passport-linkedin-oauth2").Strategy;
const strategy_name = "linkedin";
require("dotenv").config();

passport.use(
  strategy_name,
  new linkedinStrategy(
    {
      clientID: process.env.LINKEDIN_CLIENT_KEY,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      callbackURL: process.env.LINKEDIN_CALLBACK,
      scope: ["r_liteprofile", "r_emailaddress"],
    },
    function (accessToken, refreshToken, profile, done) {
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
      return done(null, profile);
    }
  )
);
