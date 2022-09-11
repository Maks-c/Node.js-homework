const {Contact}=require("../../models")

const {RequestError} = require("../../helpers");

const updateFavorite=async (req, res, next) => {
    try{

        const {id} = req.params;
        const{favorite}=req.body
        const result = await Contact.findByIdAndUpdate(id, {favorite},{new:true})
        if(!result){
            throw RequestError(400,"missing field favorite")
        }
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        })
    } catch (error){
        next(error);
    }
}

module.exports=updateFavorite