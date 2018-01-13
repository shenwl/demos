const saveJSON = function(path, answers) {
    const fs = require('fs')
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

exports.saveJSON = saveJSON