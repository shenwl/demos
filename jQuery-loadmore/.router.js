function setRouter(app){ 
 var router = app; 

router.get('/getNews', function(req, res) {
    var idx = req.query.index
    var len = 3
    var news = []
    for(var i = 0; i < len; i++) { 
        news.push('新闻' + (parseInt(idx) + i + 1))
    }
    res.send({
        status: 0,
        data: news
    })
})}
 module.exports.setRouter = setRouter