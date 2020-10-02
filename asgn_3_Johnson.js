var $ = function (id) 
{
    return document.getElementById(id);
}

            
//code to needs to concatenated        

var validateForm = function ()
{
    var isValid = true;

    var myFirstName = $("firstname").value;
	var myLastName = $("lastname").value;
    var email = $("email").value;
    var city = $("city").value;
    var donation = $("donation").value;
    var donationAmount = parseInt(donation);

	if (myFirstName == '')
    {
        $("firstnameerror").innerHTML = "Enter a first name";        
        isValid = isValid && false;
    }
    
     if (myLastName == '')
    {
        $("lastnameerror").innerHTML = "Enter last name";
        isValid = isValid && false;
    }
            
     if (email == '')
    {
        $("emailerror").innerHTML = "Enter email address";
        isValid = isValid && false;
    }

     if (city == '-')
    {
        $("cityerror").innerHTML = "Enter city";
        isValid = isValid && false;
    }
    
    if (donation == '')
    {
        $("donationerror").innerHTML = "Enter donation amount";
        isValid = isValid && false;
    }    
    else if (donationAmount > 0) 
	{
		$("donationerror").innerHTML = "Thank you for donating!" + "$" + donation;
	}
    else
    {
        $("donationerror").innerHTML = "Please enter a valid value";
        isValid = isValid && false;
    }

    if(isValid)
    {
        $("myform").submit();
    }
}

var clearAll = function ()
{
    $("firstname").value = "";
    $("lastname").value = "";
    $("email").value = "";
    $("city").value = "-";
    $("donation").value = "";
}

// THE BUTTONS !!!
window.onload = function ()
{
    $("addpatron").onclick = validateForm;  //Remember no ()!!
    $("clearfields").onclick = clearAll;  
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