const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },
    education: {
  type: String,
  default: "",
},

skills: {
  type: String,
  default: "",
},

linkedin: {
  type: String,
  default: "",
},

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["student", "company"],
      default: "student",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);