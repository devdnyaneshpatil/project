const appointmentContext = require("../db/context/appointment.context");

const createAppointmentController = async (req, res, next) => {
  req.body.userId = req.user._id;
  try {
    const appointment = await appointmentContext.createAppointment(req.body);
    return res.status(201).json({ msg: "Appointment Booked" });
  } catch (error) {
    return next(error);
  }
};

const getAllAppointmentsController = async (req, res, next) => {
  const { page = 1, limit = 0, status } = req.query;
  try {
    const filter = {
      userId: req.user._id,
    };
    if (status) {
      filter.status = query;
    }
    const skip = (page - 1) * limit;
    const appointments = await appointmentContext.getAllAppointments(
      query,
      skip,
      limit
    );
    return res.status(200).json({ data: appointments });
  } catch (error) {
    return next(error);
  }
};

module.exports = { createAppointmentController, getAllAppointmentsController };
