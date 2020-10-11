const express = require("express");
const controller = require('../controllers/contactsController');
const router = express.Router();

router.get('/', controller.getAllContactsController)

module.exports = router