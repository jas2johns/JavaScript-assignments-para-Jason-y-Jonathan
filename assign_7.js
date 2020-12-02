$(document).ready(function() {
		
    $( "#tabs" ).tabs();
    
        $('#mysubmit').click(function () {
            
        // error condition
        var errorFound = true;    
        // step 1 validate first name input
        var firstName = $('#first_name').val();
        if (firstName == '') {
            $('#first_error').html('Please enter a first name');
            //$('#first_name').focus();
            errorFound = false;
            //return;
        }
        else {
            $('#first_error').html('');
        }
        // stp 2 validate last name input
        var lastName = $('#last_name').val();
        if (lastName == '') {
            $('#last_error').html('Please enter a last name');
            //$('#last_name').focus();
            errorFound = false;
            //return;
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
        
        if (!startDate) {
        $('#start_error').html('Please pick a Date');
        //$('start_date').focus();
        errorFound = false;    
        //return;
        }
        else {
            $('#start_error').html('');
        }
        //jon please explain why this "==" worked below.. but not "="  ?? 
        if (errorFound == false) {
            var msg = $('#message').html("Please correct Errors and Try Again").css({'color': "red"});
            return;
            }
        else {
            var msg = $('#message').html("Success: " + firstName + " " + lastName + "<br>" + "Use the Start Date as your Password").css({"color": "green"});
            return;
        }
        });
    
        //experiment
            $( "#GreatPlan" ).draggable();
            $( "#PoorPlan" ).draggable();
            $( "#droppable" ).droppable({
                drop: function( event, ui ) {
                  $(this).addClass( "ui-state-highlight" );
                    // does the if else statement go here? within the .html() within "{}" ?
                        if (ui.draggable.attr("id") == "GreatPlan")
                        {
                            $('#boxResult').html("Great Plan Picked");
                        }
                        else if (ui.draggable.attr("id") == "PoorPlan")
                        {
                            $('#boxResult').html("Poor Plan Picked");
                            $('#result').html("My Head Hurts").css({"color": "red"});
                        }
                        else
                        {
                            $('#result').html("My Head Hurts").css({"color": "red"});
                        }
                }
            });
    //end of experiment
	});

//for the 2nd tab widget make three divs 2 of them draggable and one droppable 

    // make event handler for on drop event to get .val() or smthn that processes to tab 3
        // so an if statement where: "true" is green/good 
        //and else... false or null/blank its bad/ red
            // then submit
            // no RETURNS because they need to be able to be overiden and not malleable
    
    // and add effects on the divs

// for false plans eg. no plan or bad plan use shake effect and red text

    // for true or good plan add call green text and and the roll up effect

//no returns for the above statment with dropped divs!!!!!!!

//