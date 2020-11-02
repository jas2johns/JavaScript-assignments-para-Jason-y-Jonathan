var vacationType;

$(document).ready(function () {
    // 1st hover on mouse over handler for the 3 images
    $("img").hover(
        function (event) {
            // mouse over
            event.target.style.borderStyle = "outset";
            event.target.style.borderWidth = "10px";
            event.target.style.borderRightColor = "black";
            event.target.style.borderBottomColor = "black";
        },
        function (event) {
            // mouse out
            event.target.style.border = "0px";
        });

    // 2nd event handler on mouse over/ hover to have embossed animation same as B4
    $("#currentimage").hover(
        function (event) {
            // mouse over
            event.target.style.borderStyle = "outset";
            event.target.style.borderWidth = "10px";
            event.target.style.borderRightColor = "black";
            event.target.style.borderBottomColor = "black";
        },
        function (event) {
            // mouse out
            event.target.style.border = "0px";
        });

    // 3rd click event for each the imges the main 1's    
    $("#vacationimages img").click(
        function (event) {
            // transition animation for the big img
            $("#bigimage").fadeOut("fast", function () {
                $("#currentimage").attr("src", event.target.src);
                $("#bigimage").fadeIn();
            });

            vacationType = event.target.alt;
        });

    // 4th submit me button click event
    $("#submitme").click(function () {
        // validate first name text box 
        var firstName = $("#firstname").val();
        if (firstName === "") {
            $("#question span").html("Must enter first name.");
            return;
        } else {
            $("#question span").html("");
        }

        // display the message "result"
        $("#mymessage").html(firstName + " you want a " + vacationType);
    });


    // 5th hide img click event
    //hide the big img
    // hide the result message 


});