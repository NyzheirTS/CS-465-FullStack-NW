const mongoose = require('mongoose');

//define the tirp schema
const tripSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    length: { type: String, required: true },
    start: { type: Date, required: true },
    resort: { type: String, required: true },
    perPerson: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});

//meals schema
const mealsSchema = new mongoose.Schema({
    code: {type: String, required: true, index: true},
    name: { type: String, required: true, index: true}, 
    image: { type: String, required: true},
    description: {type: String, required: true}
});

//rooms schema
const roomsSchema = new mongoose.Schema({
    code: {type: String, required: true, index: true},
    name: { type: String, required: true, index: true}, 
    image: { type: String, required: true},
    rate: { type: String, required: true},
    description: {type: String, required: true}
});

// news schema
const newsSchema = new mongoose.Schema({
    code: {type: String, required: true, index: true},
    title: { type: String, required: true, index: true}, 
    articleType: { type: String, requried: true},
    image: { type: String, required: true},
    date: {type: String, required: true},
    author: { type:Date, required: true},
    content: {type: String, required: true}
});


const Trip = mongoose.model('trips', tripSchema);
const Meals = mongoose.model('meals', mealsSchema);
const Rooms = mongoose.model('rooms', roomsSchema);
const News = mongoose.model('news', newsSchema);

module.exports = {
    Trip,
    Meals,
    Rooms,
    News 
};