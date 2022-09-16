const {User} = require('../../models')
const {Unauthorized} = require('http-errors')
const jwt = require('jsonwebtoken')
const {SECRET_KEY} = process.env
const bcrypt = require('bcryptjs')
const login = async (req, res) => {

    const {email, password} = req.body
    const user = await User.findOne({email});

    const passCompare = bcrypt.compareSync(password, user.password);

    if( !user || !user.verify || !passCompare) {
        throw new Unauthorized('Email is wrong or not verify, or password is wrong ')
    }

    const payload = {
        id: user._id
    }
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: '2h'})
    await User.findByIdAndUpdate(user._id, {token})

    res.json({
        status: 'success',
        code: 200,
        token,
        data: {
            email,

        }
    })
}

module.exports = login