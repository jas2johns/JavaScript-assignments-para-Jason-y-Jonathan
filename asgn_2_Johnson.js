var $ = function (id) {
	return document.getElementById(id);
}

var displayMessage = function () {
	//new
	var myFirstName = $("firstname").value;
	var myLastName = $("lastname").value;

	if (myFirstName == '' || myLastName == '') {
		$("message").innerHTML = "Please enter both your name and password ";
		return;
	}

	var myFirstName = $("firstname").value;
	var myLastName = $("lastname").value;

	//Dates defined
	var today = new Date();   //Today's Date	
	var todaymm = today.getMonth() + 1;
	var todaydd = today.getDate();
	var todayyyy = today.getFullYear();

	//message to to be displayed
	var myText = "Your Name is listed as " + myLastName + "," + myFirstName +
		" and today's date is " + todaymm + "-" + todaydd + "-" + todayyyy + ".";

	//new END!!!

	//part of code that needs to be amended!!!

	$("message").innerHTML = myText;
}

var processNames = function () {
	var pets = "";
	var numberOfPets = parseInt($("numpets").value)

	for (cntr = 1; cntr <= numberOfPets; cntr++) {
		var petsId = "pet" + cntr;
		//console.log("MID " + petsId);
		var petName = $(petsId).value;

		pets += petName + "<br>";
	}

	$("message").innerHTML = pets;
}

window.onload = function () {
	$("mybutton").onclick = displayMessage;  //Remember no ()!!
	$("myotherbutton").onclick = processNames;
}
