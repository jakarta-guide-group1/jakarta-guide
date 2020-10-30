const router = require('express').Router()
const DestinationController = require('../controllers/destinationController')

// const axios = require('axios')


router.get('/destinations', DestinationController.getDestinations)

module.exports = router