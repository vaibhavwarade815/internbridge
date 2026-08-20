const Internship = require("../models/Internship");

// Get all internships
const getInternships = async (req, res) => {
  try {
    const internships = await Internship.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: internships.length,
      internships,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch internships",
    });
  }
};


// Get single internship
const getInternshipById = async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id);

    if (!internship) {
      return res.status(404).json({
        success: false,
        message: "Internship not found",
      });
    }

    res.status(200).json({
      success: true,
      internship,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch internship",
    });
  }
};


// Create internship
const createInternship = async (req, res) => {
  try {
    const internship = await Internship.create(req.body);

    res.status(201).json({
      success: true,
      message: "Internship created successfully",
      internship,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to create internship",
    });
  }
};


module.exports = {
  getInternships,
  getInternshipById,
  createInternship,
};