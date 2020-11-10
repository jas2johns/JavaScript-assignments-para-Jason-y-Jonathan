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
       
        
        
        // made div innerhtml message appear
        var msg = $('#message').html("You are a: " + genderType +  "<br> You have: " + yearsInt + " years experience").css("background-color", "yellow");




        //make hidden div yellow dynamically!
    });

});