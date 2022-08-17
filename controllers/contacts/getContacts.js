const contactsOperations = require("../../models/contacts/index");

const getContacts=async (req, res, next) => {
    try{
        const contacts = await contactsOperations.getAllContacts()
        res.json({
            status: 'success',
            code: 200,
            data: {
                result: contacts
            }
        })
    } catch (error){
        next(error)
    }
}
module.exports=getContacts;