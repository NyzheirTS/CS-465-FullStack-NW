const newsEndPoint = 'http://localhost:3000/api/news';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
};



/* GET News */
const news = async function (req, res, next) {
    await fetch(newsEndPoint, options)
        .then(res => res.json())
        .then(json => {
          let message = null;
            if (!(json instanceof Array)){
                message = "API lookup error";
                json = [];
            } else {
                if(!json.length) {
                    message = "No Articles Exists in our database!";
                }
            }
            
            const newsItems = json.filter(a => a.articleType === "news");
            const tipsItems = json.filter(a => a.articleType === "tips");
            const showcaseItems = json.filter(a => a.articleType === "showcase");

            res.render('news', {title: "Travlr Getaways", news: newsItems, tips: tipsItems, showcase: showcaseItems[0], message});
        })
        .catch((err) => res.status(500).send(err.message));
};

module.exports = {
    news
};