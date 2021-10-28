const Router = require('express')
const counterValueController = require('../controllers/counterValueController')
const router = new Router()

router.post('/createNew',counterValueController.createNew)    // создания новых показаний
router.post('/update',counterValueController.update)    // изменить показаний (до конца месяца)

router.get('/', counterValueController.getAll)           // получить все показания
router.get('/period', counterValueController.getMonth)     // получить все показания за период
router.get('/:id', counterValueController.getOne)        // получить показания по ид 

module.exports = router