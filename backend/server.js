const dns = require("dns");

// MongoDB Atlas DNS resolution
dns.setServers([
  "8.8.8.8",
  "1.1.1.1"
]);

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const internshipRoutes = require("./routes/internshipRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const savedInternshipRoutes = require("./routes/savedInternshipRoutes");

const app = express();

/* =========================================
   MIDDLEWARE
========================================= */

app.use(cors());
app.use(express.json());


/* =========================================
   MONGODB CONNECTION
========================================= */

connectDB();


app.use("/api/users", userRoutes);
app.use("/api/internships", internshipRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/saved-internships", savedInternshipRoutes);


/* =========================================
   TEST ROUTE
========================================= */

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "InternBridge Backend is running 🚀",
  });
});


/* =========================================
   SERVER
========================================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`InternBridge Backend running on port ${PORT}`);
});