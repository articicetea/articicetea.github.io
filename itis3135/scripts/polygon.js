//variable to hold shape type
var shape = "";

//Ask user for number 0 - 10, and validate
function validateEntry(){
	var userInput = prompt("Enter a number", "0-10");
	
	//check if not a nubmer
	if (isNaN(userInput)) {
		alert("please enter a number");
		validateEntry();
		return;
	}
	
	//convert to int
	var userNumber = parseInt(userInput);

	//convert to + if # is -
	if (userNumber < 0) {
		userNumber = Math.abs(userNumber);
	}
	
	//check if greater than 10
	if (userNumber > 10) {
		alert("please enter a number less than or equal to 10");
		validateEntry();
		return;
	}
	
	//round number	
	userNumber = Math.round(userNumber);
	
	//pass number to shape method
	getShape(userNumber);
}

//display type of shape
function getShape(num) {
	switch(num){
		case 0:
		shape = "circle";
		alert(shape);
		break;
		case 1:
		shape = "henagon";
		alert(shape);
		break;
		case 2:
		shape = "digon";
		alert(shape);
		break;
		case 3:
		shape = "trigon";
		alert(shape);
		break;
		case 4:
		shape = "tetragon";
		alert(shape);
		break;
		case 5:
		shape = "pentagon";
		alert(shape);
		break;
		case 6:
		shape = "hexagon";
		alert(shape);
		break;
		case 7:
		shape = "heptagon";
		alert(shape);
		break;
		case 8:
		shape = "octagon";
		alert(shape);
		break;
		case 9:
		shape = "enneagon";
		alert(shape);
		break;
		case 10:
		shape = "decagon";
		alert(shape);
		break;
	}
}