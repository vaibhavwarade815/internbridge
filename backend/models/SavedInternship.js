const mongoose = require("mongoose");

const savedInternshipSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    internship: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Internship",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Same internship ko same user dobara save na kar sake
savedInternshipSchema.index(
  { user: 1, internship: 1 },
  { unique: true }
);

module.exports = mongoose.model(
  "SavedInternship",
  savedInternshipSchema
);