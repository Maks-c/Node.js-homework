
const {Contact}=require("../../models")
const {RequestError} = require("../../helpers");


const getById=async (req, res, next) => {
    try{
        const {id} = req.params;
        const result = await Contact.findById(id)
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