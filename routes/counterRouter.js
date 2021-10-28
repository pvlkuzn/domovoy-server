const Router = require('express')
const router = new Router()

router.post('/createNew',) // создания нового счётчика
router.post('/update',) // изменить
//  router.post('/del',)    // удалить
router.get('/',) //получить счёчик(и)
router.get('/:id',) // получить по id

module.exports = router