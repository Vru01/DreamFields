// Importing the Mongoose library
const { config } = require("dotenv");
const mongoose = require("mongoose");

// Importing the environment variables using the dotenv library
require("dotenv").config();

const dbConnect = () => {
	mongoose.connect(process.env.DATABASE_URL, {})
		.then(() => console.log("DB connected successfully"))
		.catch((err) => {
			console.log(`DB CONNECTION ISSUES`);
			console.error(err.message);
			process.exit(1);
		});
};

module.exports = dbConnect ;
