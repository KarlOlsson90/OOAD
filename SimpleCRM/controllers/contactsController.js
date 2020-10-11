const model = require('../models/contactsModel');

async function getAllContactsController(req, res) {
    try {
        var result = await model.getAllContactsModel();
        return res.status(200).json(result);
    } catch(error) {
        return res.status(400).json(error);
    }
}

module.exports = {
    getAllContactsController

}