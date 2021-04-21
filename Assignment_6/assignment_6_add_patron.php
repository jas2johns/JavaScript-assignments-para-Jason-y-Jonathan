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
$tHead = "First Name" . '|' . "Last Name" . '|' . "Email" . '|' . "City" . '|' . "BirthYear" . '|'; 


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
} else if ($age <= 15) {
    $section .= "Child";
} else if (16 <= $age && $age <= 54) {
    $section .= "Adult";
} else {
    $section .= "Senior";
}

if ($city == '-') {
    $errorMessages .= "<p>Error: You must select a City </p>";
    $isValid = false;
}


?>

<html>

<head>
    <link rel="stylesheet" href="css/KingLib_6.css">
</head>

<body>
    <div id="logo">
        <img src="http://profperry.com/Classes20/PHPwithMySQL/KingLibLogo.jpg" alt="King Library Logo">
    </div>

    <div id="patron">
               <table>
            <?php

            //data path defined
            $filename = 'data/' . 'patrons.txt';

            //Step 2 of process
            $fp = fopen($filename, 'a');   //opens the file for appending
            // $opLine = OutPut Line

            // if the file is empty, write the header line first
            // if(filesize($filename) == 0)
            // {
            //     fwrite($fp, $tHead);
            // }

            // write the actual form submission data to the file
            $opLine = $lastName . '|' . $firstName . '|' . $email . '|' . $city . '|' . $year2 . '|' . "\n";

            fwrite($fp, $opLine);

            fclose($fp);



            if ($isValid == true) {
                echo "<tr><td>Thank you for registering!</td></tr>";
                echo "<tr><td>Name: $firstName $lastName</td></tr>";
                echo "<tr><td>Email: $email</td></tr>";
                echo "<tr><td>City: $city</td></tr>";
                echo "<tr><td>Section: $section</td></tr>";
                echo "<tr><td>Row added to the patron table</td></tr>";
                } else {
                echo $errorMessages;
                echo "<p>Go BACK and make corrections</p>";
                }
            ?>
        </table>
                <?php
        if ($isValid == true) {
        ?>
            <p>
                For Admin Use only:
                <a href='assignment_3_view_patron.php'>
                    <span style='text-decoration: underline; color: blue;'>View Patrons</span>
                </a>
            </p>
        <?php
        }
        ?>
    </div>
</body>

</html>