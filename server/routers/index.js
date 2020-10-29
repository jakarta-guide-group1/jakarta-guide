const router = require('express').Router()

const userRouter = require('./userRouter')
const travelPlanRouter = require('./travelPlanRouter')

router.use(userRouter)

module.exports = router