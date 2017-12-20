let getJsonArray = function(relatedArrays) {
    let jsonArr = []
    for(let i = 0; i < relatedArrays.length-1; i++) {
        let arrCur = relatedArrays[i]
        let arrNext = relatedArrays[i+1]
        let elCount = 0
        let tempJsonArr

        let jsonItem = arrNext.map((arr, idx) => {
            
            return arr.map((el) => {
                let key = el
                let valueArr = arrCur[elCount].map((value) => `"${value}"`)
                let jsonStr = `{"${key}": [${valueArr}]}`
                elCount++
                tempJsonArr = jsonStr
                return jsonStr
            })
        })
        jsonArr.push(jsonItem)
    }
    return jsonArr
}