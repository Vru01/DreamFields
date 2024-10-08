const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	age: {
		type: Number,
		required: true,
	},
	image: {
		type: String,
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
	},
	// No need to store confirmPassword in the schema
});

module.exports = mongoose.model("User", userSchema);
