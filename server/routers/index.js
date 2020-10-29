const router = require("express").Router();

const userRouter = require("./userRouter");
// const travelPlanRouter = require("./travelPlanRouter");
// const hotelRouter = require("./hotelRoter");
const weatherRouter = require("./weatherRouter");
const Restaurant = require("../controllers/restaurantController");

router.use(weatherRouter);
router.use(userRouter);
router.get("/restaurant", Restaurant.fetchRestaurants);

module.exports = router;
