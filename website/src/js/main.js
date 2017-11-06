requirejs.config({
    baseUrl: "./src/js",
    paths: {
        'jquery': 'lib/jquery-3.2.1.min',
        'carousel': 'mod/carousel',
        'gotop': 'mod/gotop',
        'waterfall': 'mod/waterfall',
    }
})

require(['jquery', 'carousel', 'gotop', 'waterfall'],
function($, Carousel, GoTop, WaterFall) {
    new Carousel($('.bg-img'))
    new GoTop($('<div class="gotop"></div>'))
    new WaterFall($('.img-wall'), $('.load-more'))
})
