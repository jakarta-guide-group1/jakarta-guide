const router = require('express').Router()
const weatherRouter = require('./weatherRouter')

router.use(weatherRouter)

module.exports = router