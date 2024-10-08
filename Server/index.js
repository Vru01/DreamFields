// const express = require("express");
// require("dotenv").config();
// const dbConnect = require("./config/database");
// const userRoutes = require("./routes/user");
// const app = express();
// var cors = require("cors");
// const PORT = process.env.PORT || 4000;

// app.use(
//   cors({
//     origin: "*",
//   })
// );
// // Middleware
// app.use(express.json());

// app.use("/api/v1", userRoutes);

// // CORS Configuration
// app.listen(PORT, () => {
//   console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
// });

// dbConnect();

// app.get("/", (req, res) => {
//   res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
// });



const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// CORS Configuration
app.use(cors({
  origin: "*",
}));

// Import and connect to the database
const dbConnect = require("./config/database");
dbConnect();  // Call the connect function to establish the database connection

// Router import and mount
const userRoutes = require("./routes/user");
app.use("/api/v1", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("<h1>Backend is Running and this is '/' Route</h1>");
});

// Activate server
app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
