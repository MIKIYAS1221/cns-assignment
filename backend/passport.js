const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");

passport.use(new Strategy({
    clientID: process.env.client_id,
    clientSecret: process.env.client_secret,
    callbackURL: "http://localhost:8080/auth/google/callback",
    scope: ["profile", "email"]
},
    (accessToken, refreshToken, profile, cb) => {
        console.log(profile)
        return cb(null, profile);
    }
));

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((user, cb) => {
    cb(null, user);
});