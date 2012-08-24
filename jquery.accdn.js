(function($){

	$.fn.accdn = function(options) {  

		// Create some defaults, extending them with any options that were provided
		var settings = $.extend({
			'open_class'	: 'open',
			'closed_class'	: 'closed',
			'cursor'		: 'pointer',
			'mode'			: 'class'  // class, hash, first
		}, options);

		var o = settings;
		console.log(settings);

		return this.each(function() {

			var n = 1;
			$dt = $(this).find('dt');
			$dd = $(this).find('dd');

			$dd.each(function() {
				$this = $(this);

				switch(o.mode) {
					case 'hash':
						console.log('switch hash');
						break;

					case 'first':
						console.log('switch first');
						break;

					case 'class':
					default:
						console.log('class / default');
						break;
				}

				if( ! $this.prev().hasClass(o.open_class)) {
 					$this.hide();
					$this.prev().addClass(o.closed_class);
				}

				if(o.first_only && n == 1) {
					$this.show();
					$this.prev().removeClass(o.closed_class).addClass(o.open_class);
				} else {
					$this.hide();
					$this.prev().removeClass(o.open_class).addClass(o.closed_class);
				}
				n++;
			});
			$dt.click(function(e) {
				$this = $(this);
				$this.next().slideToggle(function() {
					$this = $(this);
					if($this.is(':visible')) {
						$this.prev().addClass(o.open_class).removeClass(o.closed_class);
					} else {
						$this.prev().addClass(o.closed_class).removeClass(o.open_class);
					}
				});
				e.preventDefault();
			}).css('cursor', o.cursor);

		});
	};

})(jQuery);