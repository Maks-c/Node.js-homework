const {v4} = require('uuid')
const getAllContacts = require("./listContacts")
const updateContacts = require("./updateContacts")

const addContact = async ({name, phone, email}) => {
    const contacts = await getAllContacts()
    const newContact = {
        name: name,
        phone: phone,
        email: email,
        id: v4()
    }
    contacts.push(newContact)
    await updateContacts(contacts)
    return newContact
}


module.exports = addContact