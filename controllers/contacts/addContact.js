const contactsOperations = require("../../models/contacts/index");
const Joi = require("joi");
const {RequestError} = require("../../helpers");

const contactSchema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.number().required(),
    email: Joi.string().email().required()
})


const addContact = async (req, res, next) => {

    try{
        const {error} = contactSchema.validate(req.body)
        if(error) {
            throw RequestError(400,error.message)
        }
        const result = await contactsOperations.addContact(req.body)
        res.status(201).json({
            status: "success",
            code: 201,
            data: {
                result
            }
        })
    } catch (error){
        next(error)
    }
}

module.exports = addContact