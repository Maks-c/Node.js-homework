const getAllContacts = require("./listContacts")
const getContactById = require('./getContactById')
const removeContacts = require("./removeContact")
const addContact = require("./addContact")
const updateById = require('./updateById')
const updateContacts = require('./updateContacts')
module.exports = {
    getAllContacts,
    getContactById,
    removeContacts,
    addContact,
    updateById,
    updateContacts
}