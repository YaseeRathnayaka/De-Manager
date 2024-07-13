const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { Appointment, validate } = require('../models/serviceAppointment')

// create an appointment
router.post('/dashboard', auth, async (req, res) => {
    const { error } = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const appointment = new Appointment({
        user: req.user._id,
        customerName: req.body.customerName,
        email: req.body.email,
        mobile: req.body.mobile,
        address: req.body.address,
        NIC: req.body.NIC,
        vehicleNumber: req.body.vehicleNumber,
        vehicleModel: req.body.vehicleModel,
        vehicleYear: req.body.vehicleYear,
        vehicleType: req.body.vehicleType,
        preferredDate: req.body.preferredDate,
        timeSlot: req.body.timeSlot,
        status: 'Confirmed',
        serviceTypes: req.body.serviceTypes,
    })

    try {
        await appointment.save()
        res.send(appointment)
    } catch (error) {
        res.status(500).send('An error occurred while processing your request.')
    }
})

// get all appointment
router.get('/all', auth, async (req, res) => {
    try {
        const appointments = await Appointment.find().select('-user')
        res.send(appointments)
    } catch (error) {
        res.status(500).send('Error fetching appointments.')
    }
})

// get an appointment
router.get('/:id', auth, async (req, res) => {
    try {
        const appointment = await Appointment.find({ _id: req.params.id }).select('-user')
        res.send(appointment)
    } catch (error) {
        res.status(500).send('Error fetching appointments.')
    }
})

// update an appointment
router.put('/:id', auth, async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            {
                customerName: req.body.customerName,
                email: req.body.email,
                mobile: req.body.mobile,
                address: req.body.address,
                NIC: req.body.NIC,
                vehicleNumber: req.body.vehicleNumber,
                vehicleModel: req.body.vehicleModel,
                vehicleYear: req.body.vehicleYear,
                vehicleType: req.body.vehicleType,
                preferredDate: req.body.preferredDate,
                timeSlot: req.body.timeSlot,
                status: req.body.status,
                serviceTypes: req.body.serviceTypes,
                isCompleted: req.body.isCompleted
            },
            { new: true }
        )

        if (!appointment) return res.status(404).send('The appointment with the given ID was not found.')
        res.send(appointment)
    } catch (error) {
        res.status(500).send('An error occurred while updating the appointment.');
    }

})

// delete an appointment
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