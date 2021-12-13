$(document).ready(function() {
	/*index page slider */
    $("#slider").bxSlider({
		randomStart: true,
        auto: true,
		speed: 3000,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 750,
        slideMargin: 20,
		pager: true,
		pagerType: 'short'
    });
	
	/*Jquery checkbox radio widget*/
	$("input:checkbox").on('click', function() {
	  var $box = $(this);
	  if ($box.is(":checked")) {
		var group = "input:checkbox[name='" + $box.attr("name") + "']";
		$(group).prop("checked", false);
		$box.prop("checked", true);
	  } else {
		$box.prop("checked", false);
	  }
	});
	
	/*Submit rating onclick funciton*/
	$( "#submitRating" ).click(function() {
		$( this ).slideUp();
		var $rating = $( '#googleRating' );
		var counter = 4;
		counter++;
		$rating.text( counter + ' Google Ratings' );
		$('#leaveReview').text('Thanks for your review!');
	});
	
		/*Login jquery*/
	$( "#loginButton" ).click(function() {
		var getText = $('#loginUser').val();
		console.log(getText);
		$('#changeDiv').html( '<span>' + 'Thanks for logging in ' + getText + '</span>');
	});
	
	/*FAQ Accordion */
	$( function() {
		$( "#accordion" ).accordion();
	});
	
	
	/*Submit design onclick funciton*/
	$( "#submitDesign" ).click(function() {
		$( this ).slideUp();
		$('#thankyouDiv').text('Thanks for your design, we will contact you shortly');
	});


});