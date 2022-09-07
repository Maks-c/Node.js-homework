const express = require("express")

const {validation, ctrlWrapper, auth} = require('../../middlewares')
const {auth: ctrl} = require('../../controllers/index')
const {joiRegisterSchema, joiLoginSchema} = require('../../models/uuser')

const router = express.Router()

router.post('/register', validation(joiRegisterSchema), ctrlWrapper(ctrl.register))
router.post('/login', validation(joiLoginSchema), ctrlWrapper(ctrl.login))
router.post('/logout', auth, ctrlWrapper(ctrl.logout))

module.exports = router;