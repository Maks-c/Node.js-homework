const getAllContacts = require("./listContacts")
const updateContacts = require("./updateContacts")
const updateById = async (id,{name, phone, email}) => {
    const allContacts = await getAllContacts()
    const idx = allContacts.findIndex(item => item.id === id)
    if(idx === -1) {
        return null;
    }
    allContacts[idx] = {id, name, phone, email};
    await updateContacts(allContacts)
    return allContacts[idx]
}

module.exports = updateById;