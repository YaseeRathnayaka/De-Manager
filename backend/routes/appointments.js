const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { Appointment, validate } = require('../models/serviceAppointment')

router.post('/', auth, async (req, res) => {
    const { error } = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const appointment = new Appointment({
        user: req.user._id,
        vehicle: req.body.vehicle,
        serviceType: req.body.serviceType,
        appointmentDate: req.body.appointmentDate,
        appointmentTime: req.body.appointmentTime,
        status: req.body.status
    })

    try {
        await appointment.save()
        res.send(appointment)
    } catch (error) {
        res.status(500).send('An error occurred while processing your request.')
    }
})

router.get('/all', auth, async(req, res) => {
    try {
        const appointments = await Appointment.find({user: req.user._id}).select('-user -_id')
        res.send(appointments)
    } catch (error) {
        res.status(500).send('Error fetching appointments.')
    }
})

module.exports = router