const router = require("express").Router();
const authentication = require("../middlewares/authentication");

const userRouter = require("./userRouter");
const travelPlanRouter = require("./travelPlanRouter");
// const hotelRouter = require("./hotelRouter");
const weatherRouter = require("./weatherRouter");
const RestaurantController = require("../controllers/restaurantController");
const DestinationController = require("../controllers/destinationController");

// router.use(weatherRouter)
router.use(userRouter);

// router.use(authentication);
router.post("/restaurant", RestaurantController.addRestaurants);
router.get("/restaurant", RestaurantController.fetchRestaurants);
router.get("/destinations", DestinationController.getDestinations);
router.post("/destinations/add", DestinationController.addDestination);

module.exports = router;
