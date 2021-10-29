const Router = require('express')
const apartmentController = require('../controllers/apartmentController')
const router = new Router()


router.post('/createNew',apartmentController.createNew) // создания новой квартиры
router.post('/update',apartmentController.update)    // изменить квартиру
//router.post('/del',)       // удалить квартиру(?)
router.get('/',apartmentController.getAll)           // получить все квартиры
router.get('/:number',apartmentController.getOne)        // получить квартиру по номеру

module.exports = router