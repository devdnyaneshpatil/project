const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
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
      enum: ["Admin", "Provider", "User"],
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
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically set the creation date
    },
    updatedAt: {
      type: Date,
      default: Date.now, // Automatically set the update date
    },
    saloonName: {
      type: String,
    },
    rating: {
      type: Number,
      default: 5,
    },
    location: {
      address: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      postalCode: {
        type: String,
      },
      phoneNumber: {
        type: String,
      },
    },
    availability: {
      Sunday: {
        open: String,
        close: String,
      },
      Monday: {
        open: String,
        close: String,
      },
      Tuesday: {
        open: String,
        close: String,
      },
      Wednesday: {
        open: String,
        close: String,
      },
      Thursday: {
        open: String,
        close: String,
      },
      Friday: {
        open: String,
        close: String,
      },
      Saturday: {
        open: String,
        close: String,
      },
    },
    instaUrl: {
      type: String,
    },
    imageUrl: {
      type: String,
      default:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82V_f6NZe1yfjjJb9V0KsxbkG5Pq5PZWgtMR_u2ywyTOK7-2HsWjFyL7lhu6i-SCwuIU&usqp=CAU'
    }
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
  }
);

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
