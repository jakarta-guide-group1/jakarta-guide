const router = require("express").Router();
const DestinationController = require("../controllers/destinationController");

router.get("/", DestinationController.getDestinations);
router.post("/add", DestinationController.addDestination);

module.exports = router;
