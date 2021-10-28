

const Router = require('express')
const tariffController = require('../controllers/tariffController')
const router = new Router()

router.post('/createNew', tariffController.createNew) // создания нового тарифа
router.post('/del', tariffController.del)  // удалить тариф
router.get('/', tariffController.getAll)   //получить тарифы
router.get('/:id', tariffController.getOne)   //получить тарифы

module.exports = router