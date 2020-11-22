$(document).ready(function() {
		
    $( "#tabs" ).tabs();
    
        $('#mysubmit').click(function () {
            
        // error condition
        var errorFound == true;    
        // step 1 validate first name input
        var firstName = $('#first_name').val();
        if (firstName == '') {
            $('#first_error').html('Please enter a first name');
            $('#first_name').focus();
            errorFound == false;
            return;
        }
        else {
            $('#first_error').html('');
        }
        // stp 2 validate last name input
        var lastName = $('#last_name').val();
        if (lastName == '') {
            $('#last_error').html('Please enter a last name');
            $('#last_name').focus();
            errorFound == false;
            return;
        }
        else {  
            $('#last_error').html('');        
        }
    //date widget
    $('#start_date').datepicker({
        minDate: new Date(),
        maxDate: +45,
        showButtonPanel: true
        });
         
        var startDate = $('#start_date').val();
        
        if (startDate == true) {
            return true;
        }   
        
        if (!startDate) {
        $('#start_error').html('Please pick a Date');
        //$('start_date').focus();
        errorFound == false;    
        return;
        }
        else {
            $('#start_error').html('');
        }
        
        if (errorFound == false) {
            var msg = $('#message').html("Please correct Errors and Try Again".css({'color': "red"}););
            return;
            }
        else {
            var msg = $('#message').html("Success: " + firstName + " " + lastName + "<br>" + "Use the Start Date as your Password".css({"color": "green"}););
            return;
        }
        });
    
	});

//first basically make a form validation easy peasy CHECK 90% done as of 11-21-20
    // however.... you need to grab the message id and do jquerey styling based on if else statement e.g: Submit truey is GREEN
    // Submit falsey is RED.. comprendo??

//draft of message print: "Success: " + firstName + " " + lastName + "<br>" + "Use the Start Date as your Password".css({"color": "green"});

//draft of falsey message: "Please correct Errors and Try Again".css({'color': "red"});



//for the 2nd tab widget make three divs 2 of them draggable and one droppable 

    // make event handler for on drop event to get .val() or smthn that processes to tab 3

//make another event handler for true and false data from user input
    
    // and add effects on the divs