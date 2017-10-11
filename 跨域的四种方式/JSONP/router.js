router.get('/news', function(req, res) {
    var cb = req.query.callback
    var data = []
    for(var i = 0; i < 5; i++) { 
        data.push('新闻' + i)
    }
    if(cb) {
        res.send(cb + '(' + JSON.stringify(data) + ')')
    }else {
        res.send(data)
    }   
})