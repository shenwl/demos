var Event = (function() {
	var eventPool = {}

	function on(evt, handler) {
		eventPool[evt] = eventPool[evt] || []
		eventPool[evt].push({
			handler: handler
		})

	}
	function off(evt) {
		delete eventPool[evt]
	}
	function fire(evt, args) {
		if(!eventPool[evt]) {
			return
		}
		for(var i=0; i<eventPool[evt].length; i++) {
			eventPool[evt][i].handler(args)
		}
	}
	return {
		on: on,
		off: off,
		fire: fire
	}
	
})()


//调用
Event.on('change', function(val){
    console.log('change...  now val is ' + val) 
})
Event.fire('change', '饥人谷')
Event.off('change')