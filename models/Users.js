const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const UserSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	hash:String, 
	email: {type: String, unique: true, lowercase: true, required: [true, "can't be blank"], index: true},
});

UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.hash);
};

UserSchema.methods.setPassword = function (password) {
    this.hash = bcrypt.hashSync(password, 10);
};

UserSchema.methods.generateJWT = function(){
	const today = new Date();
	const exp = new Date(today);
	exp.setDate(today.getDate() + 60);

	return jwt.sign({
        _id: this._id,
        exp: parseInt(exp.getTime() / 1000)
    }, process.env.jwtSecret);
};

mongoose.model('Users', UserSchema);
