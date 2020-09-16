var $ = function (id) {
	return document.getElementById(id);
}

var displayMessage = function () {
	//new
	var myFirstName = $("firstname").value;
	var myLastName = $("lastname").value;
	var numPets = $("numpets").value;
    //var numOfPets = $("numpets_error").value;
	
	/* if (myFirstName == '' || myLastName == '')
	{
		$("message").innerHTML = "Please enter both your First name and last name ";
		return;
	}
    */
    
        if  (myFirstName == "")
        {
                $("firstname_error").innerHTML = "Please enter  your First name ";
		          //return;
        }
        else if (myLastName == "")
        {
                $("lastname_error").innerHTML = "Please enter your last name ";
		          //return;
        }
        else if (numpets)
        {
                $("numpets_error").innerHTML = "Please enter number of pets ";
		          //return;
        }
	
	//Dates defined
	var today = new Date();   //Today's Date
	var todaytext = today.toDateString();
	var todaymm  = today.getMonth() + 1;
	var todaydd  = today.getDate();
	var todayyyy = today.getFullYear();
    
        
    		var pets = "";
			
			for (cntr = 1; cntr <= 3; cntr++) 
			{		
				var petsId = "pet" + cntr;
				//console.log("MID " + petsId);
				var petName = $(petsId).value;
				
				pets += "Your Pet" + "#" + cntr + " is named " + petName + "." + "<br>";
			}

	//message to to be displayed
	var myText = "Your Name is listed as " + myLastName + "," + myFirstName + 
	" and today's date is " + todaymm + "-" + todaydd + "-" + todayyyy + "." + "<br>" + pets ;
	//new END!!!
		
		    
$("message").innerHTML = myText;
}

window.onload = function ()
{
	$("mybutton").onclick = displayMessage;  //Remember no ()!!
}

    
		//part of code that needs to be amended!!!
		
		/*
        
        var pets = "";        
        
        for (cntr = 1; cntr <= 3; cntr++)
        
        {
            myPetId='pet'+cntr;
            myPetName = $(myPetID).value;
        }
        
                
        
        
		*/

	//part of code that needs to be amended!!!

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
