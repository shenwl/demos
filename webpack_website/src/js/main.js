import $ from 'jquery'
import Carousel from 'mod/carousel'
import GoTop from 'mod/gotop'
import WaterFall from 'mod/waterfall'

new Carousel($('.bg-img'))
new GoTop($('<div class="gotop"></div>'))
new WaterFall($('.img-wall'), $('.load-more'))

