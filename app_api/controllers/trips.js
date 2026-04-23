const mongoose = require('mongoose');
require('../models/travlr'); // Register Model
const Model = mongoose.model('trips');



// POST: /trips - Adds a new Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsAddTrip = async(req, res) => {
    const newTrip = new Model({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

        if(!q){ // database returned no data
            return res
                .status(400)
                .json(err);
        } else { // Return new trip
            return res
                .status(201)
                .json(q);
        }

        // Uncomment the following line to show results of operation
        // on the console
        console.log(q);
};

// PUT: /trips/:tripCode - Adds a new Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsUpdateTrip = async(req,res) => {
    const q  = await Model 
        .findOneAndUpdate(
            { 'code' : req.params.tripCode },
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            }
        )
        .exec();

        if(!q) {
            //Database returned no data
            return res
                .status(400)
                .json(err);
        } else {
            return res 
                .status(201)
                .json(q);
        }
};


//GET: /trips - list all the trips 
//Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();
    
        //Uncommnet the follwing lin e to show results of query
        //on the console
        // console.log(q);


    if(!q) { // Database returned no data 
        return res
            .status(404)
            .json(err);
    } else { //return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};

//GET: /trips/:tripCode - lists a single trip
//Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode}) // find by code
        .exec();
    
        //Uncommnet the follwing lin e to show results of query
        //on the console
        // console.log(q);


    if(!q) { // Database returned no data 
        return res
            .status(404)
            .json(err);
    } else { //return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};

//DELETE: /trips/:tripCode - deletes a single trip
//Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsDeleteOne = async(req, res) => {
    const q = await Model
        .deleteOne({'code' : req.params.tripCode}) // find by code
        .exec();
    
        //Uncommnet the follwing lin e to show results of query
        //on the console
        // console.log(q);


    if(!q) { // Database returned no data 
        return res
            .status(404)
            .json(err);
    } else { //return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};


module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteOne
};