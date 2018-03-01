// Wait for page to fully load so that the JS corerctly runs
$(window).bind("load", function() {
	

	
	// Go to correct area on page when using top nav
	
	
	function fixHoverStateMobile()
	{
		var el = $('#navbarContainer');
		var html = el.html();
		el.html('');
		setTimeout(function() {el.html(html);}, 0)
	}
	


$(document).ready(function(){ 
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  5000);

});

	

});




