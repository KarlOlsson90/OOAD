const express = require('express')

const contactsRoute = require('./contactsRoute.js')

const router = express.Router()

router.use('/contacts', contactsRoute);

module.exports = router