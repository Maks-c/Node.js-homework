const getAllContacts = require('./listContacts')
const updateContacts = require("./updateContacts");

const removeContacts = async (id) => {
        const contacts = await getAllContacts()
        const idx = contacts.findIndex(item => item.id === id);
        if(idx === -1) {
            return null;
        }
        const [result] = contacts.splice(idx, 1)
        await updateContacts(contacts)
        return result
}

module.exports = removeContacts;