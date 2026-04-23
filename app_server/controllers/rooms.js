const tripsEndpoint = 'http://localhost:3000/api/rooms';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
};


/* GET Rooms */
const rooms = async function (req, res, next) {
    await fetch(tripsEndpoint, options)
        .then(res => res.json())
        .then(json => {
            let message = null;
            if (!(json instanceof Array)){
                message = "API lookup error";
                json = [];
            } else {
                if(!json.length) {
                    message = "No Rooms Exists in our database!";
                }
            }
            res.render('rooms', {title: "Travlr Getaways", rooms: json, message});
        })
        .catch((err) => res.status(500).send(err.message));
};

module.exports = {
    rooms
};