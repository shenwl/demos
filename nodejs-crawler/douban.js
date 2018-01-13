const request = require('request')
const cheerio = require('cheerio')

const log = console.log.bind(console)

const Movie = function () {
    this.name = ''
    this.score = 0
    this.quote = ''
    this.ranking = 0
    this.coverUrl = ''
}

const movieFromDiv = function (div) {
    const movie = new Movie()
    // cheerio.load()返回一个可查询的特殊obj
    const e = cheerio.load(div)

    movie.name = e('.title').text()
    movie.score = e('.rating_num').text()
    movie.quote = e('.inq').text()

    const pic = e('.pic')
    movie.ranking = pic.find('em').text()
    movie.coverUrl = pic.find('img').attr('src')

    return movie
}

const saveMovies = function (movies) {
    const fs = require('fs')
    const path = './results/douban/douban_movies.txt'
    // 第二个参数是null，不管用； 第三个参数是缩进层次
    const s = JSON.stringify(movies, null, 2)
    fs.writeFile(path, s, function (err) {
        if (err !== null) {
            log('----write file error----', err)
        } else {
            log('----save file success----')
        }
    })
}

const moviesFromUrl = function (url) {
    request(url, function (err, res, body) {
        if (err === null && res.statusCode == 200) {
            const e = cheerio.load(body)
            const movies = []
            const movieDivs = e('.item')
            for (let i = 0; i < movieDivs.length; i++) {
                let element = movieDivs[i]
                const div = e(element).html()
                const m = movieFromDiv(div)
                movies.push(m)
            }
            saveMovies(movies)
        } else {
            log('----error request fail----', err)
        }
    })
}

const __main = function () {
    const url = 'https://movie.douban.com/top250'
    moviesFromUrl(url)
}

__main()
