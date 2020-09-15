var $ = function (id) 
        {
			return document.getElementById(id);
		}

var displayMessage = function ()
{
	//new
	var myFirstName = $("firstname").value;
	var myLastName = $("lastname").value;
	
	if (myFirstName == '' || myLastName == '')
	{
		$("message").innerHTML = "Please enter both your name and password ";
	}
		else
			{
				var myFirstName = $("firstname").value;
				var myLastName = $("lastname").value;
				
				//Dates defined
				var today = new Date();   //Today's Date
				var todaytext = today.toDateString();
				var todaymm  = today.getMonth() + 1;
				var todaydd  = today.getDate();
				var todayyyy = today.getFullYear();
			
			
				//message to to be displayed
				var myText = "Your Name is listed as " + myLastName + "," + myFirstName + 
				" and today's date is " + todaymm + "-" + todaydd + "-" + todayyyy + ".";
			}
	//new END!!!
    
		//part of code that needs to be amended!!!
		
		/*var text = "";
		var p = 0;
		var pet1 = $(pet1);
		var pet2 = $(pet2);
		var pet3 = $(pet3);
		*/

		//var processNames = function ()

		/*
		{
			var pets = "";
			
			for (cntr = 1; cntr <= 3; cntr++) 
			{		
				var petsId = "pet" + cntr;
				//console.log("MID " + petsId);
				var petName = $(petsId).value;
				
				pets += petName + "<br>";
			}
			
			//$("msg").innerHTML = pets;
		}
			*/		
		
		
		
		
		/*while ( p =< 3)
		{
			text += "<br> Your Pet " + pet1 + p;
			//p++;
		} */
    
    
    
$("message").innerHTML = myText;
}

window.onload = function ()
{
	$("mybutton").onclick = displayMessage;  //Remember no ()!!
}




/*
"Your Name is listed as "," and today's date is " 
"Your Pet #1 " " is named " "."; 
"Your Pet #2 " " is named " "."; 
"Your Pet #3 " " is named " ".";*/