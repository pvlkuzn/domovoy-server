const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')



router.post('/createNew',userController.createNew) // регистрация
router.post('/login', userController.login)      // логин

router.get('/auth', userController.check)        // проверка залогине ли пользователь возвращает объект описания(роль, токен, пользователь)
router.get('/', userController.getAll)            // получить пользователей
router.get('/:id', userController.getOne)

module.exports = router