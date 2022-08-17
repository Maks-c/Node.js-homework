const contactsOperations = require("../../models/contacts/index");
const {RequestError} = require("../../helpers");
const removeContact=async (req, res, next) => {
    try{
        const {id}=req.params;
        const result = await contactsOperations.removeContacts(id)
        if(!result){
            throw RequestError(404,'not found')
        }
        res.json({
            message:"book deleted",
        })
    }catch (error){
        next(error)
    }
}
module.exports=removeContact