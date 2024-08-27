const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required:true,
      trim: true, // Removes surrounding whitespace
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    lastName: {
      type: String,
      trim: true, // Removes surrounding whitespace
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true, // Ensure email is unique across users
      lowercase: true, // Convert email to lowercase
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please fill a valid email address",
      ], // Email validation using regex
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
    age: {
      type: Number,
      min: [0, "Age cannot be negative"],
      max: [120, "Age cannot exceed 120 years"],
    },
    role: {
      type: String,
      enum: ["Admin", "ServiceProvider", "User"],
      default: "User",
    },
    isActive: {
      type: Boolean,
      default: true, // New users are active by default
    },
    mobile: {
      type: String,
    },
    smsNotifications: {
      type: Boolean,
      default:false
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically set the creation date
    },
    updatedAt: {
      type: Date,
      default: Date.now, // Automatically set the update date
    },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
  }
);

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
