const express = require("express")
const router = express.Router()
const {contacts: ctrl} = require("../../controllers")
const {joiSchema, favoriteJoiSchema} = require('../../models/contact')
const {validation, ctrlWrapper, auth} = require('../../middlewares')


router.get('/', auth, ctrlWrapper(ctrl.getContacts))
router.post('/', auth, validation(joiSchema), ctrlWrapper(ctrl.addContact))
router.get('/:id', ctrlWrapper(ctrl.getById))
router.put('/:id', validation(joiSchema), ctrlWrapper(ctrl.updateById))
router.patch('/:id/favorite', validation(favoriteJoiSchema), ctrlWrapper(ctrl.updateFavorite))
router.delete('/:id', ctrlWrapper(ctrl.removeContacts))

module.exports = router