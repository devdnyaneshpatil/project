const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
    serviceProviderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Completed", "Pending", "Cancelled"],
        default:"Pending"
    }
});

const Appointment = mongoose.model('appointment', appointmentSchema);

module.exports = Appointment;
