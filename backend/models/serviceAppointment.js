const mongoose = require('mongoose')
const Joi = require('joi')

const serviceAppointmentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    address: {
        type: String,
        required: true
    },
    NIC: {
        type: String,
        required: true
    },
    vehicleNumber: {
        type: String,
        required: true
    },
    vehicleModel: {
        type: String,
        required: true
    },
    vehicleYear: {
        type: Number,
        required: true,
        maxlength: 4
    },
    vehicleType: {
        type: String,
        required: true
    },
    preferredDate: {
        type: Date,
        required: true
    },
    timeSlot: {
        type: String,
        required: true,
        enum: [
            "08:00 AM - 10:00 AM",
            "10:00 AM - 12:00 PM",
            "12:00 PM - 02:00 PM",
            "02:00 PM - 04:00 PM",
            "04:00 PM - 06:00 PM"
        ]
    },
    status: {
        type: String,
        enum: ['Pending', 'Completed', 'Cancelled'],
        default: 'Pending'
    },
    serviceTypes: {
        type: [String],
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
})

function validateServiceAppointment(appointment) {

    const schema = Joi.object({
        customerName: Joi.string().min(2).required(),
        email: Joi.string().email().required(),
        mobile: Joi.string().min(10).max(10).required(),
        address: Joi.string().required(),
        NIC: Joi.string().required,
        vehicleNumber: Joi.string().required(),
        vehicleModel: Joi.string().required(),
        vehicleYear: Joi.number().required(),
        vehicleType: Joi.string().required(),
        preferredDate: Joi.date().required(),
        timeSlot: Joi.string().valid(
            "08:00 AM - 10:00 AM",
            "10:00 AM - 12:00 PM",
            "12:00 PM - 02:00 PM",
            "02:00 PM - 04:00 PM",
            "04:00 PM - 06:00 PM"
        ).required(),
        serviceTypes: Joi.array().items(Joi.string()).required(),
        status: Joi.string().valid('Pending', 'Confirmed', 'Cancelled').default('Pending'),
        isCompleted: Joi.boolean().default(false)
    })

    return schema.validate(appointment)
}

const ServiceAppointment = mongoose.model('ServiceAppointment', serviceAppointmentSchema)

exports.Appointment = ServiceAppointment
exports.validate = validateServiceAppointment