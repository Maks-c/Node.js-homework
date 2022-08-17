const fs = require("fs/promises")
const contactsPath = require("../contacts/contactsPath")


const getAllContacts = async () => {
        const data = await fs.readFile(contactsPath, 'utf-8')
        return JSON.parse(data)
}

module.exports = getAllContacts