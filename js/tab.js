$(document).ready(function() {

	$('.tab-container .tab-content:not(:first)').hide();

	$('.tabs li').click(function(event) {
		event.preventDefault();
		$('.tab-container .tab-content').hide();
		$('.tabs .active').removeClass("active");
		$(this).addClass('active');

		var clicked = $(this).find('a:first').attr('href');
		$('.tab-container ' + clicked).fadeIn('fast');
	}).eq(0).addClass('active');	

});