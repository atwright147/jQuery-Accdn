$(document).ready(function() {
	$('.js-accordion dd').each(function() {
		$this = $(this);
		if( ! $this.prev().hasClass('open')) {
			$this.hide();
			$this.prev().addClass('closed');
		}
	});
	$('.js-accordion dt').click(function(e) {
		$this = $(this);
		$this.next().slideToggle(function() {
			$this = $(this);
			if($this.is(':visible')) {
				$this.prev().addClass('open').removeClass('closed');
			} else {
				$this.prev().addClass('closed').removeClass('open');
			}
		});
		e.preventDefault();
	}).css('cursor', 'pointer');
});