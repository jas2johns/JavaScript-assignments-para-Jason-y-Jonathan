<?php
$isValid = true;
$firstName = $_POST['firstname'];
$lastName = $_POST['lastname'];
$email = $_POST['email'];
$city = $_POST['city'];
$errorMessages = '';

// write an if statement whether they registered succesfully
//ok so like install another 'flag boolean' to trgger when true then echo
//


//OK u must fix the html tags in it's spacing

//also fix the birth year thingy form element and wirte an if statement to code it

// lastly fix the CSS for the purple div/body thingy  AS OF Feb 9th 2021

if ($firstName == '') {
    $errorMessages .= "<p>Error: You must enter a First Name </p>";
    $isValid = false;
}

if ($lastName == '') {
    $errorMessages .= "<p>Error: You must enter a Last Name </p>";
    $isValid = false;
}

if ($email == '') {
    $errorMessages .= "<p>Error: You must enter an Email Address </p>";
    $isValid = false;
}

if ($city == '-') {
    $errorMessages .= "<p>Error: You must select a City </p>";
    $isValid = false;
}

// birth year code needed!!!!!!	
// if and else if then else	
// so... yea	



?>

<html>

<head>
    <link rel="stylesheet" href="css/assignment_2.css">
</head>

<body>
    <div id="logo">
        <img src="http://profperry.com/Classes20/PHPwithMySQL/KingLibLogo.jpg" alt="King Library Logo">
    </div>

    <div id="patron">
        <?php
        if ($isValid == true) {
            echo "<h4>Thank you for registering!</h4>";
            echo "Name: $firstName";
            echo "<br />";
            echo "Email: $email";
            echo "<br />";
            echo "City: $city";
        } else {
            echo $errorMessages;
            echo "<p>Go BACK and make corrections</p>";
        }
        ?>
    </div>
</body>

</html>