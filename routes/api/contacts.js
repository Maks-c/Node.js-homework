const express = require('express')
const router = express.Router()
const ctrl=require('../../controllers/contacts')

router.get('/', ctrl.getContacts)
router.get('/:id', ctrl.getById)
router.post('/', ctrl.addContact)
router.put('/:id', ctrl.updateById)
router.delete('/:id', ctrl.removeContacts)


module.exports = router
