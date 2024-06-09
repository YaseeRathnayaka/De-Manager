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
        tasks: req.body.tasks,
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

router.get('/all', auth, async (req, res) => {
    try {
        const appointments = await Appointment.find({ user: req.user._id }).select('-user -_id')
        res.send(appointments)
    } catch (error) {
        res.status(500).send('Error fetching appointments.')
    }
})

router.put('/:id', auth, async (req, res) => {
    const { error } = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const appointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            {
                user: req.user._id,
                vehicle: req.body.vehicle,
                serviceType: req.body.serviceType,
                tasks: req.body.tasks,
                appointmentDate: req.body.appointmentDate,
                appointmentTime: req.body.appointmentTime,
                status: req.body.status
            },
            { new: true }
        )

        if (!appointment) return res.status(404).send('The appointment with the given ID was not found.')
        res.send(appointment)
    } catch (error) {
        res.status(500).send('An error occurred while updating the appointment.');
    }

})

router.delete('/:id', auth, async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(req.params.id);

        if (!appointment) return res.status(404).send('The appointment with the given ID was not found.');
        res.send(appointment);
    } catch (error) {
        res.status(500).send('An error occurred while deleting the appointment.');
        console.log(error)
    }
});

module.exports = router