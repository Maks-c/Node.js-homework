const {Contact}=require("../../models")
const {RequestError} = require("../../helpers");
const removeContact=async (req, res, next) => {
    try{
        const {id}=req.params;
        const result = await Contact.findByIdAndRemove(id)
        if(!result){
            throw RequestError(404,'not found')
        }
        res.json({
            message:"contact deleted",
            result
        })
    }catch (error){
        next(error)
    }
}
module.exports=removeContact