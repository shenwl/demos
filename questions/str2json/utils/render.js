//util
let getRenderArr = function(jsonArr) {
    let newJsonArr = []
    for(let i = 0; i < jsonArr.length - 1; i++) {
        let arrNext = jsonArr[i+1]
        let arrCur = jsonArr[i]
        let elCount = 0
        
        for(let i = 0; i < arrNext.length; i++) {
            let arr = arrNext[i]
            arr.forEach( el => {
                let obj = JSON.parse(el)
                let key = Object.keys(obj)[0]
                let value = arrCur[elCount]
                elCount++
                let newObj = `{"${key}": [${value}]}`
                newJsonArr.push(newObj)
            })
        }
    }
    return newJsonArr
}

let render = function(jsonArray) {
    let renderArr = getRenderArr(jsonArray)

    let level0 = renderArr[renderArr.length - 1]
    let objLevel0 = JSON.parse(level0)
    let key = Object.keys(objLevel0)[0]
    let value = renderArr.slice(0, -1)
    let json = `{"${key}": [${value}]}`
    return json
}




