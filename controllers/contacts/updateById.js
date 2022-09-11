const {Contact}=require("../../models")
const Joi = require("joi");
const {RequestError} = require("../../helpers");
const contactSchema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.number().required(),
    email: Joi.string().email().required()
})

const updateById=async (req, res, next) => {
    try{
        const {error} = contactSchema.validate(req.body)
        if(error) {
            throw RequestError(400,error.message)
        }
        const {id} = req.params;
        const result = await Contact.findByIdAndUpdate(id,req.body,{new:true})
        if(!result){
            throw RequestError(404,'not found')
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

module.exports=updateById