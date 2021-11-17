const Router = require('express')
const resourceController = require('../controllers/resourceController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')
const { ADMIN } = require('../roles')
const router = new Router()

router.post('/createNew',checkRoleMiddleware(ADMIN) ,checkRoleMiddleware(ADMIN),resourceController.createNew) // создания нового ресурса
router.post('/del', checkRoleMiddleware(ADMIN), resourceController.del) // удалить ресурс

router.get('/', resourceController.getAll)     //получить все ресурсы
router.get('/:id', resourceController.getOne)  //  получить ресур

module.exports = router