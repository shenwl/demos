var $ = require('jquery')

function WaterFall($ct, $btn) {
    this.$ct = $ct
    this.$btn = $btn
    this.init()
    this.bind()
}
WaterFall.prototype.init = function() {
    this.colSumHeight = []
    this.ctWidth = this.$ct.width()
    this.nodeWidth = this.$ct.find('li').outerWidth(true)
    for(var i = 0; i < parseInt(this.ctWidth / this.nodeWidth); i++) {
        this.colSumHeight.push(0)
    } 
    this.getNodes(5)
    
}
WaterFall.prototype.bind = function() {
    var self = this
    self.$btn.on('click', function (e) {
        e.preventDefault()
        
        self.getNodes(5)
    })
}
WaterFall.prototype.getNodes = function(num) {
    var self = this
    var urls = []
    var nodes = []
    var width
    var height

    self.isLoaded = false
    for(var i = 0; i < num; i++) {
        width = Math.floor(Math.random() * 100) + 200
        height = Math.floor(Math.random() * 100) + 200
        urls.push('https://picsum.photos/' + width + '/' + height)
    }
    $(urls).each(function(index, url) {
        var $imgLi = $('<li></li>')
        var $img = $('<img>')
        $img.attr('src', url)
        $imgLi.append($img)
        self.$ct.append($imgLi)
        //注意异步加载
        $img.on('load', function() {
            self.putNode($imgLi)
        })      
    })
}
WaterFall.prototype.putNode = function($node) {
    var minItem = Math.min.apply(null, this.colSumHeight)
    var minIndex = this.colSumHeight.indexOf(minItem)
    $node.css({
        top: minItem,
        left: this.nodeWidth * minIndex
    })

    this.colSumHeight[minIndex] += $node.outerHeight(true)
    this.$ct.height(Math.max.apply(null, this.colSumHeight))  
}

module.exports = WaterFall