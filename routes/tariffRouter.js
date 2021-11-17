

const Router = require('express')
const tariffController = require('../controllers/tariffController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')
const { ADMIN } = require('../roles')
const router = new Router()

router.post('/createNew',checkRoleMiddleware(ADMIN), tariffController.createNew) // создания нового тарифа
router.post('/del',checkRoleMiddleware(ADMIN), tariffController.del)  // удалить тариф
router.get('/', tariffController.getAll)   //получить тарифы
router.get('/:id', tariffController.getOne)   //получить тарифы

module.exports = router