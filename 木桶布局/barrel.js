var log = console.log.bind(console)

function Barrel($ct) {
    this.ct = $ct
    this.baseHeight = 150
    this.rowList = []
    this.loadImgs()
}
Barrel.prototype = {
    loadImgs: function() {
        var _this = this
        var imgUrls = _this.getImgUrls(60)
        for(var i = 0; i < imgUrls.length; i++) {
            var img = new Image()
            img.src = imgUrls[i]
            img.onload = function() {
                var originWidth = this.width
                var originHeight = this.height
                var ratio = originWidth / originHeight

                var imgInfo = {
                    //之前用$(img)，在layout中只有最后一张图片成功append到div.img-box
                    target: $(this),
                    width: _this.baseHeight*ratio,
                    height: _this.baseHeight,
                    ratio: ratio
                }
                _this.render(imgInfo)
            }
        }
        
    },
    render: function(imgInfo) {
        var rowList = this.rowList
        var ctWidth = this.ct.width()
        var rowWidth = 0
        var rowHeight = 0
        var lastImgInfo = imgInfo

        rowList.push(lastImgInfo)
        for(var i = 0; i < rowList.length; i++) {
            rowWidth += rowList[i].width
        }
        if(rowWidth > ctWidth) {
            rowWidth = rowWidth - lastImgInfo.width
            rowList.pop()
            var newHeight = (this.baseHeight / rowWidth) * ctWidth
            this.layout(newHeight, rowList)
            this.rowList = []
            this.rowList.push(lastImgInfo)
        } 
    },
    layout: function(newHeight, rowList) {
        var $imgRow = $('<div class="img-row"><div>')

        $.each(rowList, function(idx, imgInfo) {
            var $img = imgInfo.target
            var $imgBox = $('<div class="img-box"></div>')
            $imgBox.append($img)
            $imgBox.height(newHeight)
            $imgBox.width(newHeight * imgInfo.ratio)
            $imgRow.append($imgBox)
        })
        this.ct.append($imgRow)   
    },
    getImgUrls: function(num) {
        var width
        var height
        var urls = []
        for(var i = 0; i < num; i++) {
            width = Math.floor(Math.random() * 100) + 50
            height = Math.floor(Math.random() * 100) + 50
            urls.push('https://picsum.photos/' + width + '/' + height + '?blur')   
        }
        return urls
    }
}

var barrel = new Barrel($('.img-ct'))