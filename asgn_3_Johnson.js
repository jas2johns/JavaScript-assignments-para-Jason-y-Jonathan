var $ = function (id) 
    {
		return document.getElementById(id);
	}
        
            
//code to needs to concatenated        

var validateForm = function ()
{
    clearErrorMessages();
    
    var isValid = true;
    var myFirstName = $("firstname").value;
	var myLastName = $("lastname").value;
    var email = $("email").value;
    var city = $("city").value;
    var donation = $("donation").value;
    var donationAmount = parseInt(donation);
	
	if (myFirstName == '')
	   {
		  $("firstnameerror").innerHTML = "Enter a First name";
           isValid = isValid && false;
	   }
    
    if (myLastName == '')
        {
            $("lastnameerror").innerHTML = "Enter Last name";
            isValid = isValid && false;
        }
            
    if (email == '')
        {
            $("emailerror").innerHTML = "Enter Email";
            isValid = isValid && false;
        }
    if (city == '-')
        {
            $("cityerror").innerHTML = "Select a City from the list";
            isValid = isValid && false;
        }
    if (donation == '')
        {
            $("donationerror").innerHTML = "Enter donation amount";
            isValid = isValid && false;
        }
    
    if(isNaN(donationAmount))
        {
           $("donationerror").innerHTML = "Enter Donation Amount";
            isValid = isValid && false;
        }
    if (!isValid)
        {
            $("endmessage").innerHTML = "Patron Not Added!";
            isValid = isValid && false;
        } 
        else
	{
		$("myform").submit();
	}
}

// clear all button function

var clearAll = function ()
{
    $("firstname").value = "";
    $("lastname").value = "";
    $("email").value = "";
    $("city").value = "-";
    $("donation").value = "";
    
    clearErrorMessages();
}

var clearErrorMessages = function ()

{
    $("firstnameerror").innerHTML = "";
    $("lastnameerror").innerHTML = "";
    $("emailerror").innerHTML = "";
    $("cityerror").innerHTML = "";
    $("donationerror").innerHTML = "";
}


    // THE BUTTONS !!!
    window.onload = function ()
    {
        $("addpatron").onclick = validateForm;  //Remember no ()!!
        $("clearfields").onclick = clearAll;
        $("firstname").focus();
    }
    
   
