$(document).ready(function() {
	$("#nav_list a").click(function(evt)
	{
		var speaker = $(this).attr("title");
		$.getJSON("json_files/" + speaker + ".json", function(data) {
			$.each(data, function() {
				$.each(this, function(key, value) {
					$("#speakerDiv").html("");
					$("#speakerDiv").append(
						"<h1>" + value.title + "</h1>" +
						"<h2>" + value.month + "</h2>" +
						"<h3>" + value.speaker + "</h3>" +				
						 "<img src= '" + value.image + "'>" +
						"<p>" + value.text + "</p>"
					);
				});
			});
		});
	});
	
	
}); // end ready