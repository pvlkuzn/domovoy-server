const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleWare = require('../middleware/authMiddleware')


router.post('/createNew',userController.createNew) // регистрация
router.post('/login', userController.login)      // логин

router.get('/', userController.getAll)            // получить пользователей
router.get('/:id', userController.getOne)
router.get('/auth',authMiddleWare, userController.check)        // проверка залогине ли пользователь возвращает объект описания(роль, токен, пользователь)

module.exports = router