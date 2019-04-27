const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const passport = require('passport');
const mongoose = require('mongoose');


const User = mongoose.model('Users');
/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}).exec(function(err,users){
  	if(err){return next(err)};
  	return res.json(users);
  })
});

module.exports = router;
