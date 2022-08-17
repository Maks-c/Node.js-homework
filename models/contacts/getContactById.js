const getAllContacts = require("./listContacts")


const getContactById = async (id) => {
        const contacts = await getAllContacts()
        const result = contacts.find(item => item.id === id)
        return result || null;
}

module.exports = getContactById