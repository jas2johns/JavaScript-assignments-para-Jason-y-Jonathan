$(document).ready(function(){
    // 1st hover on mouse over handler for the 3 images
    $("img").hover(
        function(event){
            // mouse over
            event.target.style.borderStyle = "outset";
            event.target.style.borderWidth = "10px";
            event.target.style.borderRightColor = "black";
            event.target.style.borderBottomColor = "black";
        },
        function(event) {
            // mouse out
            event.target.style.border = "0px";
        });

    // 2nd event handler on mouse over/ hover to have embossed animation same as B4
        $("#currentimage").hover(
        function(event){
            // mouse over
            event.target.style.borderStyle = "outset";
            event.target.style.borderWidth = "10px";
            event.target.style.borderRightColor = "black";
            event.target.style.borderBottomColor = "black";
        },
        function(event) {
            // mouse out
            event.target.style.border = "0px";
        });
    // 3rd click event for each the imges the main 1's
        // transmition animation for the big img
     $("img").click (
         function(event) {
             $( "#bigimage" ).fadeIn( "slow" );
         
     });   
    // 4th submit me button click event
        // validate first name text box 
        // display the message "result"

    // 5th hide img click event
        //hide the big img
        // hide the result message 


});