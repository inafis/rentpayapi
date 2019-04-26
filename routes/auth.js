var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var passport = require('passport');
var mongoose = require('mongoose');


var User = mongoose.model('Users');
var auth = jwt({secret: process.env.jwtSecret, userProperty: 'payload'});


/**
 *   Registers a new account
 *
 **/

 router.post('/register',function(req,res,next){ 
 	let user = new User();
	user.firstName = req.body.firstname;
	user.lastName = req.body.lastname;
	user.email = req.body.email;
	user.setPassword(req.body.password);

	user.save(function(err,user){
		if(err){
			return res.status(400).json({message:"We goofd, something's wrong;"});
		};

		user.hash = undefined;
		return res.json({token:user.generateJWT(), user:user});
	});
 });

/**
 *   Login a new account
 *
 *
 **/

router.post('/login',function(req,res,next){
	let user = {
		email: req.body.email,
		password: req.body.password
	};
	passport.authenticate('local',function(err, user, info){
		if(err){
            return next(err);
        }
        if(user){
            return res.json({token: user.generateJWT(), user: user});
        }else{
            return res.status(401).json({message: info.message});
        }
	})(req,res,next);
})
 module.exports = router;