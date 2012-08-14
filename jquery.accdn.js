(function($){

	$.fn.accdn = function(options) {  

		// Create some defaults, extending them with any options that were provided
		var settings = $.extend({
			'open_class'   : 'open',
			'closed_class' : 'closed',
			'cursor'       : 'pointer',
		}, options);

		var o = settings;
		console.log(settings);

		return this.each(function() {

			$dt = $(this).find('dt');
			$dd = $(this).find('dd');

			$dd.each(function() {
				$this = $(this);
				if( ! $this.prev().hasClass(o.open_class)) {
					$this.hide();
					$this.prev().addClass(o.closed_class);
				}
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