const router = require("express").Router();

const userRouter = require("./userRouter");
const travelPlanRouter = require("./travelPlanRouter");
// const hotelRouter = require("./hotelRouter");
const weatherRouter = require("./weatherRouter");
const RestaurantController = require("../controllers/restaurantController");
const DestinationController = require('../controllers/destinationController')

// router.use(weatherRouter)
router.use(userRouter);
router.post('/restaurant', RestaurantController.addRestaurants)
router.get('/restaurant', RestaurantController.fetchRestaurants)
router.get('/destinations', DestinationController.getDestinations)


module.exports = router;
