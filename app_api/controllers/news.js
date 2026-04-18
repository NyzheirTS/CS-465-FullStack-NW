const mongoose = require('mongoose');
const News = require('../models/travlr'); // Register Model
const Model = mongoose.model('news');

//GET: /news - list all the news articles  
//Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const newsList = async(req, res) => {
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

//GET: /news/:articleType - gets news articles of a specific type
//Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const newsListByType = async(req, res) => {
    const q = await Model
        .find({'articleType' : req.params.newsType}) // No filter, return all records
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
    newsList,
    newsListByType
}