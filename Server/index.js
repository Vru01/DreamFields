const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config();
const userRoutes = require("./routes/userRoutes");
const quizRoutes = require("./routes/quizRoutes")
const dbConnect = require("./config/database");

const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// CORS Configuration
app.use(cors({
  origin: "*",
}));

dbConnect();  

app.use("/api/v1", userRoutes);
app.use("/api/v1/quiz" , quizRoutes) ;

app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running on port no. ${PORT} and this is '/' Route.</h1>`);
});

// Activate server
app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
