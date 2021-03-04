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
    <link rel="stylesheet" href="css/KingLib_3.css">
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
                echo "<tr><td>Section: $section</td></tr>";
                echo "<tr><td>City: $city</td></tr>";
            } else {
                echo $errorMessages;
                echo "<p>Go BACK and make corrections</p>";
            }

            // not sure of its placement but, a required if statment:
            //  $filename = 'data/patrons.txt';
            //  if (file_exists($filename))
            //  {
            //  echo "The file $filename exists";
            //  } else {
            //  echo "The file $filename does not exist";
            //  }

            //new content to be appended from here  CHECK !!
            // Number 1st: gather the data..    CHECK !!
            // $filename = 'data/'.'patrons.txt';   CHECK !!
            // #2 Add the FIELD INFO to the file you are making
            // 'E.G  for example':    CHECK !!
            //$fp = fopen($filename, 'a');   //opens the file for appending CHECK !!

            //$output_line = $lastname.'|'.$firstname.'|'."\n"; CHECK !!

            //fwrite($fp, $output_line); CHECK !!

            //fclose($fp); CHECK !!

            //echo assignment 2 Results!!!!

            //Step 3: make SURE!!! that steps one and 2 are implemented before the printing or echo ing of the table!!!!

            // possibly a seperate php tag chunk

            //Step 3 B: 


            //Step 4 IMPLEMENTATION!!!!!! EXAMPLE!!
            //This is to be a hyper link to the the Results table BELOW!!!
            //<?php
            //$display = "";
            //$line_ctr = 0;
            //
            //$fp = fopen($filename, 'r');   //opens the file for reading
            //
            //while(true)
            //{
            //$line = fgets($fp);
            //
            //if (feof($fp))
            //{
            //break;
            //}
            //
            //$line_ctr++;
            //
            //$line_ctr_remainder = $line_ctr % 2;
            //
            //if ($line_ctr_remainder == 0)
            //{
            //$style = "style='background-color: #FFFFCC;'";
            //} else {
            //$style = "style='background-color: white;'";
            //}
            //
            //list($tHead, $lastName, $firstName, $email, $city, $year2) = explode('|', $line);
            //
            //$display .= "<tr><th></th></tr>";
            //$display .= "<tr $style>";
            //$display .= "<td>".$lastName."</td>";
            //$display .= "<td>".$firstName."</td>";
            //$display .= "<td>".$email."</td>";
            //$display .= "<td>".$city."</td>";
            //$display .= "<td>".$year2."</td>";
            // dont forget: Email, City, and "$year2" as headers
            //$display .= "</tr>\n";  //added newline
            //}
            //
            //fclose($fp );
            //
            //echo $display;   //This prints the table rows
            //
            //
            // WHERE THE END PHP tag is suppesed to be...










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