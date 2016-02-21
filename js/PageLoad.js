/* When the page is loaded */
$(function() {

	// When the user clicks and h3
	$('h3').on('click',function(){

		// Hide this element
		$(this).next().hide();

	});

});