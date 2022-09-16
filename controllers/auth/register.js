const {Conflict} = require('http-errors')
const gravatar = require("gravatar")
const {User} = require('../../models')
const bcrypt = require('bcryptjs')
const {sendEmail} = require('../../helpers')
const {v4} = require('uuid');


const register = async (req, res) => {
    const {subscription, email, password,verify} = req.body
    const user = await User.findOne({email});
    if(user) {
        throw new Conflict(`User with ${email} already exist`)
    }

    const verificationToken = v4()


    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const avatarURL = gravatar.url(email)


    const result = await User.create(
        {
            subscription,
            password: hashPassword,
            email,
            avatarURL,
            verificationToken,
            verify
        }
    )
    const mail = {
        to: email,
        subject: 'Подтверждение регистрации',
        html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Подтверждение</a>`
    }

    await sendEmail(mail)

    res.status(201).json({
        status: 'success',
        code: 201,
        data: {
            user: {
                result
            }

        }
    })
}


module.exports = register