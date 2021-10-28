const Router = require('express')
const resourceController = require('../controllers/resourceController')
const router = new Router()

router.post('/createNew', resourceController.createNew) // создания нового ресурса
router.post('/del', resourceController.del) // удалить ресурс
router.get('/', resourceController.getAll)     //получить все ресурсы
router.get('/:id', resourceController.getOne)  //  получить ресур

module.exports = router