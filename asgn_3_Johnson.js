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
    if (city == '')
        {
            $("cityerror").innerHTML = "Select a City";
            isValid = isValid && false;
        }
    if (donation == '')
        {
            $("donationerror").innerHTML = "Enter donation amount";
            isValid = isValid && false;
        }
    // i think i dont need this BELLOW!!!
    
    /*
    else if (donationAmount > 0);
        {
            $("donationerror").innerHTML = "Thank you for donating " + "$" + donationAmount + " !";
        }
    
    */
    else
        {
           $("donationerror").innerHTML = "Please enter a valid value";
            isValid = isValid && false;
        }
	if (isValid)
	{
		$("myform").submit();
	}
}

// clear all button function

var clearAll = function ()
{
    $("firstname").value == "";
    $("lastname").value == "";
    $("email").value == "";
    $("city").value == "-";
    $("donation").value == "";
}



    // THE BUTTONS !!!
    window.onload = function ()
    {
        $("addpatron").onclick = validateForm;  //Remember no ()!!
        $("clearfields").onclick = clearAll;
        $("firstname").focus();
    }
    
   
