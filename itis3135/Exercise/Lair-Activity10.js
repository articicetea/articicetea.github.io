$(document).ready(function() {
	
	// preload the image for each link
	$("#image_list a").each(function()
	{
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	
	// set up the event handlers for each link
	$("#image_list a").click(function(evt)
	{
		
		var caption = $(this).attr("title");
		var imageURL = $(this).attr("href");
	
		//swap caption and fade
		$("#caption").fadeOut(3000, function() {
			$("#caption").text(caption);
			$("#caption").fadeIn(3000);
		});
			
		$("#main_image").fadeOut(3000, function()
		{
			$("#main_image").attr("src", imageURL);
			$("#main_image").fadeIn(3000);
		});
	
		// cancel the default action of each link
		evt.preventDefault();
	}); //end click
	
	//move the focus to the first link
	$("li:first-child a").focus();
	
}); // end ready