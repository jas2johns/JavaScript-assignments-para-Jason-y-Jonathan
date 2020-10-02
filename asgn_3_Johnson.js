		var $ = function (id) 
        {
			return document.getElementById(id);
		}
        
            
    //code to needs to concatenated    
        
         
var validateForm = function ()
{
    var myFirstName = $("firstname").value;
	var myLastName = $("lastname").value;
    var email = $("email").value;
    var city = $("city").value;
    var donation = $("donation").value;
	
	if (myFirstName == '')
	   {
		  $("firstnameerror").innerHTML = "Enter a first name";
	   }
    
    else if (myLastName == '')
        {
            $("lastnameerror").innerHTML = "Enter last name";
        }
            
    else if (email == '')
        {
            
        }
    else if (city == '')
        
    else if (donation == '')
        
	else
	{
		$("myform").submit();
	}
}



var donationTrigger = function()
{
	var donation = $("donation").value;
	
	if (donation > 0)
	{
		$("msg").innerHTML = "Thank you for donating!" + "$" + donation;
	}
	else if (donation == 0)
	{
		$("msg").innerHTML = "Please consider donating next time";
	}
    
    else
        {
            $("msg").innerHTML = "Please enter a value"
        }
}

        

var clearAll = function ()

{
    $("firstname").value == "";
    $("lastname").value == "";
    $("email").value == "";
    $("city").value == "";
    $("donation").value == "";
}

    // THE BUTTONS !!!
    window.onload = function ()
    {
        $("addpatron").onclick = displayMessage;  //Remember no ()!!
        
    }
    
    window.onload = function ()
    
    {
        $("clearfields").onclick = clearAll;
        $("firstname").value = "";
        $("firstname").focus();
    }
    
    
    
    /*
    var myFirstName = $("firstname").value;
	var myLastName = $("lastname").value;
    var email = $("email").value;
    var city = $("city").value;
    var donation = $("donation").value;
    */
    
    
    /*
                FOR LOOP THAT I THOUGHT 
    
                var displayMessage = function ()
    {
        var errorFound = "No";
        if  (myFirstName == "")
        {
                $("firstnameerror").innerHTML = "Please enter your first name ";
		          errorFound = "Yes";
        }
        if (myLastName == "")
        {
                $("lastnameerror").innerHTML = "Please enter your last name ";
		          errorFound = "Yes";
        }
        if (email == "")
        {
                $("email_error").innerHTML = "Enter Email";
		          errorFound = "Yes";
        }

        if (city == "")
            {
                $("cityerror").innerHTML = "Select a City from the list";
                errorFound = "Yes";
            }
        if (donation == "")
            {
                $("donationerror").innerHTML = "Enter Donation Amount";
                errorFound = "Yes";
            }

        if(errorFound == "Yes")
            {
                return;
            }
            
        }
    
    */