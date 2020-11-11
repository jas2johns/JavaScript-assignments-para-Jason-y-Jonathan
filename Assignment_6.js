$(document).ready(function () {
    $('#mysubmit').click(function () {

        // step 1 validate first name input
        var firstName = $('#first_name').val();
        if (firstName == '') {
            $('#first_error').html('You must enter a first name');
            $('#first_name').focus();
            return;
        }

        // stp 2 validate last name input
        var lastName = $('#last_name').val();
        if (lastName == '') {
            $('#last_error').html('You must enter a last name');
            $('#last_name').focus();
            return;
        }

        // same process for gender
        var gender = $('input[name="gender"]:checked').val();
        if (!gender) {
            
            $('#gender_error').html('You must select a gender');
            return;
        }

        // same process for years of experience
        var years = $('#years').val();
        if (years == '-') {
            $('#years_error').html("You must select a number");
            //$('#years').focus();
            return;
        }
        
        // condiditions for the message print
        
        var yearsInt = parseInt(years);
        
        var genderType;
        
        if (gender == "M") {
            var genderType = gender += "ale";
            
        }
        else {
            var genderType = gender += "emale";
            
        } 
       
        // to do still as of today
            // h1 heading i believe with title? and spacing for box size
        
        //make hidden div yellow dynamically!
        var msg = $('#message').html('<h1>' + "Employment Stats for " + firstName + " " + lastName + '</h1>' + "<br>" + "You are a: " + genderType +  "<br> You have: " + yearsInt + " years experience").css({"background-color": "yellow", "background-size": "300px 300px",  "padding": "50px"});




        
    });

});