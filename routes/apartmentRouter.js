const Router = require('express')
const apartmentController = require('../controllers/apartmentController')
const { check } = require('../controllers/userController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')
const {ADMIN, USER, MANAGER} = require('../roles')
const router = new Router()


router.post('/createNew',checkRoleMiddleware(ADMIN) ,apartmentController.createNew) // создания новой квартиры
router.post('/update',apartmentController.update)    // изменить квартиру
//router.post('/del',)       // удалить квартиру(?)
router.get('/',apartmentController.getAll)           // получить все квартиры
router.get('/:number',apartmentController.getOne)        // получить квартиру по номеру

module.exports = router