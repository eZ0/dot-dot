$( document ).ready(function() {
	$('#_email').hide();

	$('#_btnwant').click(function(){
		$('#_email').delay( 1200 ).fadeIn('slow');
		$('#_buttons').fadeOut('slow');
	});
});