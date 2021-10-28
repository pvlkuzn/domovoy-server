const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const apartmentRouter = require('./apartmentRouter')
const counterRouter = require('./counterRouter')
const counterValueRouter = require('./counterValueRouter')
const resourceRouter = require('./resourceRouter')
const tariffRouter = require('./tariffRouter')

router.use('/user', userRouter)
router.use('/apartment',apartmentRouter)
router.use('/counter', counterRouter)
router.use('/counterValue',counterValueRouter)
router.use('/resource',resourceRouter)
router.use('/tariff',tariffRouter)

module.exports = router