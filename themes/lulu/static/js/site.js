// Wait for page to fully load so that the JS corerctly runs isotop
$(window).bind("load", function() {
	
	$('.container').isotope({
  percentPosition: true,
  resizable: false,
  itemSelector: '.item',
    transitionDuration: '0s',
  columnWidth: '.item',
  masonry: {
    columnWidth: '.item',
  }
});
$('.container').isotope();



	
	// Email form
	$('#emailForm').submit(function(){
		if ($('#inputName').val() == '') {
			alert('please enter a name');
			return false;
		}
		if ($('#inputEmail').val() == '') {
			alert('please enter an email');
			return false;
		}
		if ($('#inputMessage').val() == '') {
			alert('please enter a message');
			return false;
		}
		var data = {
			name: $('#inputName').val(),
			email: $('#inputEmail').val(),
			message: $('#inputMessage').val(),
		}

        $.ajax({
            type: "POST",
            url: 'https://la64j4k0z9.execute-api.eu-west-1.amazonaws.com/production/louisetrainor-send-email',
            // The key needs to match your method's input parameter (case-sensitive).
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data){
                $('#emailForm').replaceWith('<p class="bg-success">Thanks for getting in touch! <br /> I will try and get back to you as soon as I can.<p>');
			},
            failure: function(errMsg) {
                $('#emailForm').replaceWith('<p class="bg-error">Sorry! Something went wrong. Please refresh the page and try again.<p>');
            }
        });
	
		return false;
	});
	
	// Go to correct area on page when using top nav
	
	
	function fixHoverStateMobile()
	{
		var el = $('#navbarContainer');
		var html = el.html();
		el.html('');
		setTimeout(function() {el.html(html);}, 0)
	}
	

	
	// Scroll to a section o nthe page, can use a large speed for animation or 0 for non
	function scrollPage(gotoName, speed)
	{
		var section = $('section[data-goto="'+gotoName+'"]');

		if (! section.length) {
			var section = $('html');
		}
		
		var scrollPx = section.offset().top;
		
		// Take into account the nav bar being fixed to the top of the page
		scrollPx = scrollPx + 1 - $('#navbarContainer').height();
		
		//if (! $('#navbarContainer').hasClass('navbar-fixed-top')) {
			scrollPx = scrollPx + 5;
		//} else {
		//	scrollPx = scrollPx - 45;
		//}
		
		// update url bar
		changeHistory('/' + gotoName);
		     		
	    $('html,body').animate({
	    	scrollTop: scrollPx
	    }, speed);
	}
	

});




$(function() {
    $('footer').footerReveal();
});
$(function() {
    $('section.portfolio').scroll(function() {
        $('html, body').animate({scrollTop: $(document).height()}, 2000);
        return false;
    });
});
