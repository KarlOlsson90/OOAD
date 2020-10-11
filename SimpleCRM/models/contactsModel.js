const mongoose = require('mongoose')

const contactsSchema = new mongoose.Schema({
    name: String
})

const contactsDB = mongoose.model("contacts", contactsSchema)

async function getAllContactsModel(){
    const result = await contactsDB.find({})
    return result
}
module.exports = {
    getAllContactsModel
}