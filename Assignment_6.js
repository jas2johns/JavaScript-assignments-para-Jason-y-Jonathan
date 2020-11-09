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
        var gender = $('input [name="gender"]:checked').val();
        if (!gender) {
            $('#gender_error').html('You must select a gender');

            // this does not work!!! the focus attribute

            $(!'input [name="gender"]: checked').focus();

            return;
        }

        // same process for years of experience
        var years = $('#years').val();
        if (years == '-') {
            $('#years_error').html("You must select a number");
            $('#years').focus();
            return;
        }

        var yearsInt = parseInt(years);

        // made div innerhtml message appear
        var msg = $('#message').html("You are a " + gender +  "<br> You have: " + yearsInt + "years experience").css("background-color", "yellow");


        // im not sure if line 45 is Concatenated properly....   but the real issue is line 20 to 30


        //make hidden div yellow dynamically!
    });

});

