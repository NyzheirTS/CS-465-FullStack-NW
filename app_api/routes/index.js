const express = require("express");
const router = express.Router();

//this is where we import the controllers we will route
const tripsController = require("../controllers/trips");

// define route for our tirps endpoint
router
    .route("/trips")
    .get(tripsController.tripsList) //Get method routes tripList
    .post(tripsController.tripsAddTrip) // POST Method adds a trip

router // get method routes tripsFindByCode - requires parameter
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;