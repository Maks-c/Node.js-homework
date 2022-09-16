const mongoose = require("mongoose")
const logger = require('morgan')
const express = require("express")
const cors = require("cors")
require('dotenv').config()

const contactsRouter = require('./routes/api/contacts')
const authRouter = require('./routes/api/auth')
const usersRouter = require('./routes/api/users')
const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/api/contacts', contactsRouter)
app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)

app.use((req, res) => {
    res.status(404).json({message: 'Not found'})
})

app.use((err, req, res, next) => {

    const {status = 500, message = "app error"} = err;
    res.status(status).json({message: message})
})


const {DB_HOST, PORT = 3000} = process.env
mongoose.connect(DB_HOST)
    .then(() => app.listen(PORT))
    .catch(error => {
        console.log(error.message)
        process.exit(1)
    })


