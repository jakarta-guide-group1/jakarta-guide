const router = require("express").Router();

const userRouter = require("./userRouter");
const travelPlanRouter = require("./travelPlanRouter");
const hotelRouter = require("./hotelRoter");

router.use(userRouter);

module.exports = router;
