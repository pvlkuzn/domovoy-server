const Router = require('express')
const counterController = require('../controllers/counterController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')
const { ADMIN } = require('../roles')
const router = new Router()

router.post('/createNew', checkRoleMiddleware(ADMIN), counterController.createNew) // создания нового счётчика
router.post('/update', counterController.update) // изменить
//  router.post('/del', )    // удалить
router.get('/', counterController.getAll) //получить счёчик(и)
router.get('/:id', counterController.getOne) // получить по id

module.exports = router