/*!
* jQuery Plugin v1.0.1
* https://github.com/atwright147/jquery-accdn
*
* Copyright 2012, Andy Wright
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://www.opensource.org/licenses/mit-license.php
* http://www.opensource.org/licenses/GPL-2.0
*/
(function($){

	$.fn.accdn = function(options) {  

		// Create some defaults, extending them with any options that were provided
		var settings = $.extend({
			'open_class'	: 'open',
			'closed_class'	: 'closed',
			'cursor'		: 'pointer',
			'speed'			: 'fast',
			'easing'		: 'linear',
			'mode'			: 'class'  // class, hash, first
		}, options);

		var o = settings;
		//console.debug(settings);

		// FROM: https://groups.google.com/forum/?fromgroups=#!topic/jquery-en/BdTg8J6HwRI
		$.fn.switchClass = function(a, b){
			var t = $(this).hasClass(a);
			$(this).addClass( t ? b : a ).removeClass( t ? a : b );
		}

		return this.each(function() {

			var n = 1;
			$dt = $(this).find('dt');
			$dd = $(this).find('dd');

			$dd.each(function() {
				$this = $(this);

				switch(o.mode) {
					case 'hash':
						url_hash = location.hash.replace('#','');
						//console.debug('switch hash');
						if( ! $this.prev().hasClass(url_hash)) {
		 					$this.hide();
							$this.prev().switchClass(o.closed_class, o.open_class);
						} else {
							$this.prev().switchClass(o.open_class, o.closed_class);
						}
						break;

					case 'first':
						//console.debug('switch first');
						if(n == 1) {
							$this.show();
							$this.prev().switchClass(o.closed_class, o.open_class);
						} else {
							$this.hide();
							$this.prev().switchClass(o.open_class, o.closed_class);
						}
						n++;
						break;

					case 'class':
					default:
						//console.debug('class / default');
						if( ! $this.prev().hasClass(o.open_class)) {
		 					$this.hide();
							$this.prev().addClass(o.closed_class);
						}
						break;
				}

			});
			$dt.click(function(e) {
				$this = $(this);
				$this.next().slideToggle(o.speed, o.easing, function() {
					$this = $(this);
					if($this.is(':visible')) {
						$this.prev().switchClass(o.open_class, o.closed_class);
					} else {
						$this.prev().switchClass(o.closed_class, o.open_class);
					}
				});
				e.preventDefault();
			}).css('cursor', o.cursor);

		});
	};

})(jQuery);