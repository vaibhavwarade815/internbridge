const dns = require("dns");

dns.setServers([
  "8.8.8.8",
  "1.1.1.1",
]);

const mongoose = require("mongoose");
require("dotenv").config();

const Internship = require("./models/Internship");

const internships = [
  {
    title: "React Developer Intern",
    company: "TechNova Solutions",
    location: "Pune, Maharashtra",
    type: "Onsite",
    duration: "3 Months",
    stipend: "₹10,000 / month",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    description:
      "Work on modern React applications and gain practical frontend development experience.",
  },

  {
    title: "Full Stack Developer Intern",
    company: "CodeCraft Technologies",
    location: "Pune, Maharashtra",
    type: "Hybrid",
    duration: "6 Months",
    stipend: "₹12,000 / month",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    description:
      "Build full-stack web applications using React, Node.js, Express and MongoDB.",
  },

  {
    title: "Data Analyst Intern",
    company: "Insight Analytics",
    location: "Mumbai, Maharashtra",
    type: "Remote",
    duration: "3 Months",
    stipend: "₹8,000 / month",
    skills: ["Python", "SQL", "Excel", "Power BI"],
    description:
      "Analyze datasets and create meaningful insights and reports for business decisions.",
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected ✅");

    await Internship.deleteMany();

    await Internship.insertMany(internships);

    console.log("Internships added successfully 🎉");

    await mongoose.connection.close();

    process.exit(0);
  } catch (error) {
    console.error("Error:", error.message);

    process.exit(1);
  }
};

seedDatabase();