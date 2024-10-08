const express = require("express");
const router = express.Router();

// Import controllers and middleware
const { login, signup } = require("../controllers/Auth");
const { auth, isStudent , isAdmin } = require("../middlewares/auth");
const {getUser} = require("../controllers/getUsers") ;

// User login and signup routes
router.post("/login", login);
router.post("/signup", signup);
router.get("/getUsers", getUser) ;

// Test route (protected)
router.get("/test", auth, (req, res) => {
    res.json({
        success: true,
        message: 'Welcome to the protected route for testing',
    });
});

// Protected route for students
router.get("/student", auth, isStudent, (req, res) => {
    res.json({
        success: true,
        message: 'Welcome to the protected route for Students',
    });
});

// Protected route for admin
router.get("/admin", auth, isAdmin , (req,res) => {
    res.json({
        success: true ,
        message: "Welcome to protected route for admin" ,
    }) ;
});

module.exports = router;
