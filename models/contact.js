const {Schema, model} = require("mongoose")
const Joi=require('joi')
const contactSchema = Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact']
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    favorite: {
        type: Boolean,
        default: false
    }
}, {versionKey: false, timestamps: true})

const joiSchema=Joi.object({
    name:Joi.string().required(),
    phone:Joi.number().required(),
    email:Joi.string().required(),
    favorite:Joi.bool().valid(true,false)
})

const favoriteJoiSchema=Joi.object({
    favorite:Joi.bool().valid(true,false).required()
})

const Contact = model("contact", contactSchema)

module.exports = {
    Contact,
    joiSchema,
    favoriteJoiSchema
}