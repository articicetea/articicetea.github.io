//User input variables

var user = prompt("Hello, what is your name?", "Enter name here");
var userFeel = prompt("How are you today?", "Enter feelings");
var sumCoffee = 0;

//Get date / time
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+ today.getDate();

//Tax Variables
var subtotal = 5;
var taxPercent= .05;
var taxAmount = subtotal * taxPercent;
var total = subtotal + taxAmount;

//Random insult
var insultOne= "If I throw a stick, will you leave?";
var insultTwo= "You’re a gray sprinkle on a rainbow cupcake."
var insultThree= "Hold still. I’m trying to imagine you with a personality."




//Welcome paragraph
document.write("<h2> Welcome! </h2>");
document.writeln('<p>' + "Today is " + '<b>' + date + '</b>' + ", and the time is: " + '<b>' + time + '</b>')
document.write('<br>');
document.writeln(" Jagged Leopard Industries welcomes you, " + user + "!");
document.write('<br>');
document.writeln(" We're glad you are doing " + userFeel + "!" +  '</p>' );

//calculates tax on cup
function taxFunction() {
	document.getElementById("pButton").innerHTML = "Price after tax: " + total;
}

//alerts a picture of a cat
function catFunction() {
	alert("\n    /\\\_/\\\ \n   ( o o ) \n ==_Y_== \n       `-'")
}

//stores user inputted cups of cofee
function coffeeFunction() {
	var coffeeEntry = prompt("How many cups of coffee have you had today?");
	document.getElementById("cButton").innerHTML = "Coffee counter:	" + coffeeEntry;
}

//calculates cups of coffee to the moon
function coffeeSumFunction() {
	var cupHeight= 3.5;
	var numCupsInMile= 63360 / cupHeight;
	var numCupsToMoon= 238900 * numCupsInMile;
	var roundCups= Math.trunc( numCupsToMoon );
	document.getElementById("cSumButton").innerHTML = "Approximate cups to the moon : " + roundCups;
}

function egoFunction() {
	var random= Math.floor((Math.random() * 3) + 1);
	
	if (random == 1){
		alert(insultOne);
	} else if (random == 2){
		alert(insultTwo);
	} else {
		alert(insultThree);
	}
}