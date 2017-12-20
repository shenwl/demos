//utils
let readLines = function(str) {
    let lines = str.split('\n')
    return lines
}

let getLineLevel = function(lineArray) {
    let level = 0
    lineArray.forEach((el) => {
        if(!el) {
            level++
        }
    })
    return level
}

let renderLine = function(lineArray, lineLevel) {
    let lineObj = {}
    lineObj.level = lineLevel

    lineArray.map((el, idx, arr) => {
        let elNext = arr[idx + 1]
        if(el && elNext) {
            let o = {el : []}
            if(arr[idx+1]) {
                o.el.push(elNext)
            }
        }
    })
    return lineObj
}

let getLevelArray = function(lineArrays, levelDeep) {
    let levelArray = []
    for(let i = 0; i < levelDeep; i++) {
        let arr = lineArrays.map((lineArray) => {
            return lineArray[i]  
        })
        levelArray.push(arr)
    }
    return levelArray
}
// main
function getLevelArrays(str) {

    let lines = readLines(str)

    let levelDeep = lines[0].split(',').length

    let lineArrays = lines.map((line, idx) => {
        return line.split(',')
    })

    let levelArrays = getLevelArray(lineArrays, levelDeep)
    return levelArrays
}