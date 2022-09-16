/*мидлвара извлекает токен из заголовка и:
1 Проверяет валидность токена (то есть что мы его выдали и он не истек)
2 Извлекает из токена id, находит пользователя в базе по id и прикрепляет его к запросу (req.user)
* */

/*
* Извлечь из заголовков запроса содержание заголовковка Authorization
* Разделить его на 2 слова: bearer  и токен
* Проверить равно ли первое слово "Bearer"
* Проверить валидность второго слова (токен)
* Если токен валиден - извлечь из него id и найти пользователя в базе с таким id
* Если пользователь с таким id  мы нашли в базе - его нужно прикрепить к запросу (обьект req)
*
*
* */


const {User} = require('../models')
const jwt = require('jsonwebtoken')
const {Unauthorized} = require('http-errors')
const {SECRET_KEY} = process.env

const auth = async (req, res, next) => {

    const {authorization = " "} = req.headers

    const [bearer, token] = authorization.split(" ")
    if(bearer !== 'Bearer') {
        throw new Unauthorized('Not authorized')
    }
    try{
        const {id} = jwt.verify(token, SECRET_KEY)

        const user = await User.findById(id)
        if( !user || !user.token) {
            throw new Unauthorized('Not authorized')

        }
        req.user = user;
        next();
    } catch (error){
        if(error.message === "Invalid signature") {
            error.status = 401
        }
        next(error)
    }

}

module.exports = auth