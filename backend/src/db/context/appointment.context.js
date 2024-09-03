const { Appointment } = require("../../models")

const createAppointment = async (payload) => {
    const appointment = await new Appointment(payload).save()
    return appointment
}

const getAllAppointments = async ( query,skip, limit) => {
    const appointments = await Appointment.find(query).skip(skip).limit()
    return {
        appointments,
        totalPages:await Appointment.countDocuments(query)/limit
    }
}

module.exports={createAppointment,getAllAppointments}