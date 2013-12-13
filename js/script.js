$(document).ready(function(){
 
	// Flipping caret in timeline
	$('.project a').click( function(e) {
		setTimeout( function(){ 
			$('.caret').toggleClass("flipEffect")

			if ( $('.caret').hasClass("flipEffect") ) {
				/* $(e.target).parent().parent().css('height', 'auto'); */
				// Lame. Can't set animate height to auto, so I have to get the value manually.
				var contentHeight = $(e.target).parent().parent().css('height', 'auto').height();
				$(e.target).parent().parent().css('height', '3em').animate({ height: contentHeight }, 250);
			} else {
				$(e.target).parent().parent().animate({ height: '3em' }, 250);
			}

		}, 0);



		return false;
	});

 	// Parallax backgrounds
    $('section[data-type="background"]').each(function(){
    	var $bgobj = $(this); // assigning the object
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed'));
            var objPos = $bgobj.css('backgroundPosition').split(" ");
             
            // Put together our final background position
            var coords = objPos[0] + ' '+ yPos + 'px';
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });
 
}); 