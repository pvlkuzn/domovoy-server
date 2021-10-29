const Router = require('express')
const counterController = require('../controllers/counterController')
const router = new Router()

router.post('/createNew', counterController.createNew) // создания нового счётчика
router.post('/update', counterController.update) // изменить
//  router.post('/del', )    // удалить
router.get('/', counterController.getAll) //получить счёчик(и)
router.get('/:id', counterController.getOne) // получить по id

module.exports = router