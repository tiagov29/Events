const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config()

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK,
    profileFields: ['id', 'emails', 'name']
  },
  function(accessToken, refreshToken, profile, cb, done) {
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    return done(null,profile)
    }
));