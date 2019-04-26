var passport = require('passport');
var LocalStrategy = require('passport-http-bearer').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new BearerStrategy(
    function (token, done) {
        User.findOne({token: token}).exec(function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {message: 'Incorrect username.'});
            }
            if (!user.validPassword(password)) {
                return done(null, false, {message: 'Incorrect password.'});
            }
            user.hash = undefined;
            return done(null, user);
        });
    }
));