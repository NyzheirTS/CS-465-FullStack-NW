const mongoose = require('mongoose');
const Rooms = require('../models/travlr'); // Register Model
const Model = mongoose.model('rooms');


//GET: /rooms - list all the rooms 
//Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const roomsList = async(req, res) => {
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

//GET: /rooms/:roomCode - lists a single room
//Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const roomsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.roomCode}) // No filter, return all records
        .exec();
    
        //Uncommnet the follwing lin e to show results of query
        //on the console
        // console.log(q);


    if(!q) { // Database returned no data 
        return res
            .status(404)
            .json(err);
    } else { 
        return res
            .status(200)
            .json(q);
    }

};

module.exports = {
    roomsList,
    roomsFindByCode
}