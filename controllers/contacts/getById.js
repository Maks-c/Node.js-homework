const contactsOperations = require("../../models/contacts/index");
const {RequestError} = require("../../helpers");


const getById=async (req, res, next) => {
    try{
        const {id} = req.params;
        const result = await contactsOperations.getContactById(id)
        if( !result) {
            throw RequestError(404,`Contact with id=${id} not found`)
        }
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        })
    } catch (error){
        next(error)
    }
}

module.exports=getById;