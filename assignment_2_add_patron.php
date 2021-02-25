<?php
$isValid = true;
$firstName = $_POST['firstname'];
$lastName = $_POST['lastname'];
$email = $_POST['email'];
$year1 = $_POST['year'];
$year2 = intval($year1);
$currentDate = date('Y');
$age = $currentDate - $year2;
$section = '';
$city = $_POST['city'];
$errorMessages = '';

//OK u must fix the html tags in it's spacing
    // make table tags in echo lines!!!! 69-76

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
if ($year2 == '' || !is_numeric($year2)) {
    $errorMessages .= "<p>Error: You must enter a Birth Year </p>";
    $isValid = false;
}
else if ($age <= 15) {
    $section .= "Child";    
}
else if ( 16 <= $age && $age <= 54 ) {
    $section .= "Adult";
}
else {
    $section .= "Senior";
}

if ($city == '-') {
    $errorMessages .= "<p>Error: You must select a City </p>";
    $isValid = false;
}


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
        <table>
        <?php
        if ($isValid == true) {
                echo "<tr><th>Thank you for registering!</th></tr>";
                echo "<tr><td>Name: $firstName $lastName</td></tr>";
                echo "<tr><td>Email: $email</td></tr>";
                echo "<tr><td>Section: $section</td></tr>";
                echo "<tr><td>City: $city</td></tr>";
                } else {
                echo $errorMessages;
                echo "<p>Go BACK and make corrections</p>";
                }
            ?>
        </table>
    </div>
</body>

</html>