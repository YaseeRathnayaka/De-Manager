const { User, validate } = require('../models/user')
const express = require('express');
const mongoose = require('mongoose')
const router = express.Router()
const _ = require('lodash')
const bcrypt = require('bcrypt')
const auth = require('../middleware/auth')
const Joi = require('joi')

//Getting current user
router.get('/me', auth, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password')
    res.send(user)
})

//Create a new user
router.post('/', async (req, res) => {
    const { error } = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    let user = await User.findOne({ email: req.body.email })
    if (user) return res.status(400).send('User already registered')

    user = new User(_.pick(req.body, ['name', 'email', 'password']))
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)

    try {
        await user.save()
        const token = user.generateAuthToken()
        res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email', 'phoneNumber']))

    } catch (error) {
        res.status(500).send('An error occurred while processing your request.')
    }
})

router.put('/', auth, async (req, res) => {
    try {
        const { error } = validateUpdateUser(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user = await User.findById(req.user._id);
        if (!user) return res.status(404).send('User not found.');

        const updateFields = {};

        if (req.body.name) {
            updateFields.name = req.body.name;
        } else {
            updateFields.name = user.name;
        }

        if (req.body.email) {
            updateFields.email = req.body.email;
        } else {
            updateFields.email = user.email;
        }

        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            updateFields.password = hashedPassword;
        } else {
            updateFields.password = user.password;
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.user._id,
            updateFields,
            { new: true }
        ).select('-password');

        res.send(updatedUser);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

function validateUpdateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50),
        email: Joi.string().min(5).max(255).email(),
        password: Joi.string().min(5).max(255),
    })

    return schema.validate(user)
}

module.exports = router