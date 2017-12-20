let getRelatedArrays = function(levelArrays) {
    let reverseLevelArrays = levelArrays.reverse()

    let getPreEl = function(arr, idx) {
        let el = arr[0]
        for(let i = 1; i < idx; i++) {
            if(arr[i][0]) {
                el = arr[i]
            }
        }
        return el    
    }

    let relatedArrays = reverseLevelArrays.map((curArray, idx) => {
        if(idx < reverseLevelArrays.length - 1) {
            let preArray = reverseLevelArrays[idx + 1]
            curArray = curArray.map((el) => {
                return [el]
            })

            for(let i =0; i < curArray.length; i++) {
                if(curArray[i][0]) {
                    if(!preArray[i]) {
                        let preEl = getPreEl(curArray, i)
                        preEl.push(curArray[i][0])
                        curArray[i] = []
                    }
                }
            }

            return curArray.filter((el) => {return el[0]})
        }else {
            return curArray.map((el) => {return [el]}).filter((el) => {return el[0]})
        }
    })
    return relatedArrays
}