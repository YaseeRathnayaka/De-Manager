const mongoose = require('mongoose')
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi);

const serviceAppointmentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    vehicle: {
        type: String,
        required: true,
        trim: true,
    },
    serviceType: {
        type: String,
        required: true,
        trim: true,
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    appointmentTime: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /^([0-1]\d|2[0-3]):([0-5]\d)$/.test(v); // HH:MM format
            },
            message: props => `${props.value} is not a valid time format!`
        }
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Cancelled'],
        default: 'Pending'
    }
})

function validateServiceAppointment(appointment) {
    const schema = Joi.object({
        vehicle: Joi.string().required(),
        serviceType: Joi.string().required(),
        appointmentDate: Joi.date().required(),
        appointmentTime: Joi.string().pattern(/^([0-1]\d|2[0-3]):([0-5]\d)$/).required(),
        status: Joi.string().valid('Pending', 'Confirmed', 'Cancelled').default('Pending')
    })

    return schema.validate(appointment)
}

const ServiceAppointment = mongoose.model('ServiceAppointment', serviceAppointmentSchema)

exports.Appointment = ServiceAppointment
exports.validate = validateServiceAppointment