var $ = require('jquery')

function Carousel($ct) {
    this.$ct = $ct
    this.init()
    this.bind()
}
Carousel.prototype.init = function() {
    this.$btnPre = this.$ct.find('.left')
    this.$btnNext = this.$ct.find('.right')
    this.$imgCt = this.$ct.find('.img-ct')
    this.$imgs = this.$ct.find('.img-ct>li')
    this.imgCount = this.$imgs.length
    this.imgWidth = this.$imgs.width()
    this.pageIndex = 0
    this.isAnimate = true
    this.$bullets = this.$ct.find('.bullet-ct>li')
    this.$imgCt.append(this.$imgs.first().clone())
    this.$imgCt.prepend(this.$imgs.last().clone())
    this.$imgCt.width((this.imgCount + 2) * this.imgWidth)
    this.$imgCt.css({left: -this.imgWidth})
}
Carousel.prototype.bind = function() {
    var _this = this
    this.$btnPre.on('click', function() {
        if (!_this.isAnimate) return
        _this.playPre(1)
    })
    this.$btnNext.on('click', function() {
        if (!_this.isAnimate) return
        _this.playNext(1)
    })
    this.$bullets.on('click', function(e){
        var target = e.target
        var index = $(target).index()
        if(_this.pageIndex > index) {
            _this.playPre(_this.pageIndex - index)
        }else if(_this.pageIndex < index) {
            _this.playNext(index - _this.pageIndex)
        }
    })
}
Carousel.prototype.playPre = function(len) {
    var _this = this
    this.isAnimate = false
    this.$imgCt.animate({
        left: '+=' + len*this.imgWidth
    }, 500, function(){
        _this.pageIndex -= len
        _this.whichBullet()
        if(_this.pageIndex === -1) {
            _this.toLastImg()
        }
        _this.isAnimate = true
    })
}
Carousel.prototype.playNext = function(len) {
    var _this = this
    this.isAnimate = false
    this.$imgCt.animate({
        left: '-=' + len*this.imgWidth
    }, 500, function() {
        _this.pageIndex += len
        _this.whichBullet()
        if(_this.pageIndex === _this.imgCount){
            _this.toFirstImg()
        }
        _this.isAnimate = true
    })
}
Carousel.prototype.toFirstImg = function() {
    this.$imgCt.css({left: -this.imgWidth})
    this.pageIndex = 0
    this.whichBullet()
}
Carousel.prototype.toLastImg = function() {
    this.$imgCt.css({left: -this.imgCount*this.imgWidth})
    this.pageIndex = this.imgCount - 1
    this.whichBullet()
}
Carousel.prototype.whichBullet = function() {
    this.$bullets.removeClass('active').eq(this.pageIndex).addClass('active')
}

module.exports = Carousel
    

