const mongoose = require('mongoose')
const Joi = require('joi')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

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
    tasks: {
        type: [taskSchema],
        required: true,
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
        enum: ['Pending', 'Completed', 'Cancelled'],
        default: 'Pending'
    }
})

function validateServiceAppointment(appointment) {
    const taskSchema = Joi.object({
        name: Joi.string().required(),
        completed: Joi.boolean().default(false)
    });
    
    const schema = Joi.object({
        vehicle: Joi.string().required(),
        serviceType: Joi.string().required(),
        tasks: Joi.array().items(taskSchema).required(),
        appointmentDate: Joi.date().required(),
        appointmentTime: Joi.string().pattern(/^([0-1]\d|2[0-3]):([0-5]\d)$/).required(),
        status: Joi.string().valid('Pending', 'Confirmed', 'Cancelled').default('Pending')
    })

    return schema.validate(appointment)
}

const ServiceAppointment = mongoose.model('ServiceAppointment', serviceAppointmentSchema)

exports.Appointment = ServiceAppointment
exports.validate = validateServiceAppointment