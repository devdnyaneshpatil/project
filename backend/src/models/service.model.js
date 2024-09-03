const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  serviceName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const Service = mongoose.model("service", serviceSchema)

module.exports=Service
