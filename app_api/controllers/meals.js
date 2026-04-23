const mongoose = require('mongoose');
const Meal = require("../models/travlr"); 
const Model = mongoose.model('meals')


//GET: /meals - list all the avaliable meals 
//Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const mealsList = async(req, res) => {
    const q = await Model
        .find({})
        .exec();

    
    if(!q) {
        return res
            .status(404)
            .json(err);
    } else {
        return res
            .status(200)
            .json(q);
    }
};

//GET: /meals/:mealCode - list a single meal plan 
//Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const mealsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code': req.params.mealsCode})
        .exec();

    
    if(!q) {
        return res
            .status(404)
            .json(err);
    } else {
        return res
            .status(200)
            .json(q);
    }
}
module.exports = {
    mealsList,
    mealsFindByCode
}