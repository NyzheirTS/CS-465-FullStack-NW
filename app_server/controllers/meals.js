const mealdEndPoint = 'http://localhost:3000/api/meals';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
};



/* GET Meals */
const meals = async function (req, res, next) {
    await fetch(mealdEndPoint, options)
        .then(res => res.json())
        .then(json => {
            let message = null;
            if(!(json instanceof Array)){
                message = "API lookup error";
                json = [];
            } else {
                if(!json.length) {
                    message = "No Meals Exsists in our Database!";
                }
            }
            res.render('meals', {title: "Travlr Getaways", meal: json, message});
        }).catch((err) => res.status(500).send(err.message));
};


module.exports = {
    meals
};