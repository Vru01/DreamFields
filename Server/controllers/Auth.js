const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Signup route handler
exports.signup = async (req, res) => {
  try {
    // Get data
    const { name, email, password, age, image } = req.body;
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists',
      });
    }

    // Secure the password
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error in hashing password',
      });
    }

    // Create entry for user
    const user = await User.create({
      name,
      email,
      age,
      password: hashedPassword, // Store hashed password
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`,
    });

    return res.status(201).json({
      success: true,
      message: 'User created successfully',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'User cannot be registered, please try again',
    });
  }
};

// Login route handler
exports.login = async (req, res) => {
  try {
    // Data fetch
    const { email, password } = req.body;

    // Validation on email and password
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all the details carefully',
      });
    }

    // Check if user is available
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User is not registered',
      });
    }

    // Verify password and generate JWT token
    if (await bcrypt.compare(password, user.password)) {
      // Password match
      const payload = {
        email: user.email,
        id: user._id,
        // role: user.role,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });

      user = user.toObject();
      user.token = token;
      user.password = undefined;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        // secure: true, // Uncomment if using HTTPS
      };

      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: 'User logged in successfully',
      });
    } else {
      // Password does not match
      return res.status(403).json({
        success: false,
        message: 'Incorrect password',
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: 'Login unsuccessful',
    });
  }
};
