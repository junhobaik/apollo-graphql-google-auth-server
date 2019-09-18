const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('dotenv').config();

const callbackURL = `${process.env.AWS_PUBLIC_DNS}:4000/auth/google/callback`;

module.exports = passport => {
  passport.serializeUser((user, done) => {
    console.log('> serializeUser', user.displayName);
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    console.log('> deserializeUser', user.displayName);
    done(null, user);
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET_ID,
        callbackURL
      },
      (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        return done(null, profile);
      }
    )
  );
};
