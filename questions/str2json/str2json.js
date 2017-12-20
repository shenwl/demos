/*
需求：
    string -词法分析-> json
    给出一种基于逗号和换行分隔的语法
    对这种语法的字符串进行词法分析
    得出思维导图的层次
    然后返回json格式
*/ 

//test string
const string = `
奴隶社会,非洲,古埃及文明,金字塔
,亚洲,两河流域文明,汉谟拉比法典
,,古印度,种姓制度
,,,佛教的创立
,欧洲,希腊,希腊城邦
,,,雅典民主
,,罗马,城邦
,,,帝国的征服与扩展
,,希腊罗马古典文化,建筑艺术
,,,公历
`
let log = console.log.bind(console)

function str2json(string) {
    let str = string.trim()

    let levelArrays = getLevelArrays(str)

    let relatedArrays = getRelatedArrays(levelArrays)

    let jsonArray =  getJsonArray(relatedArrays)

    let json = render(jsonArray)
    
    return json
}

//test
let test = str2json(string)
log(test)