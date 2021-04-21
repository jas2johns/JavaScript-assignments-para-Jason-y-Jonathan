<html>

<head>
    <link rel="stylesheet" href="css/KingLib_6.css">
</head>

<body>
    <div id="logo">
        <img src="http://profperry.com/Classes20/PHPwithMySQL/KingLibLogo.jpg" alt="King Library Logo">
    </div>

    <div id="patron">
        <h1>View Patrons</h1>
        <table border='1.5'>
            <?php
                                                
            $display = "";
            $line_ctr = 0;
            // this needs to be "MySQL-ized " else is fine tho
            $fp = fopen('data/patrons.txt', 'r');   //opens the file for reading
            $display .= "<tr><th>Last Name</th><th>First Name</th><th>Email</th><th>City</th><th>Birth Year</th></tr>";
            while (true) {
                $line = fgets($fp);

                if (feof($fp)) {
                    break;
                }

                $line_ctr++;

                $line_ctr_remainder = $line_ctr % 2;

                if ($line_ctr_remainder == 0) {
                    $style = "style='background-color: #FFFFCC;'";
                } else {
                    $style = "style='background-color: white;'";
                }

                list($lastName, $firstName, $email, $city, $year2) = explode('|', $line); 

                $display .= "<tr $style>";
                $display .= "<td>" . $lastName . "</td>";
                $display .= "<td>" . $firstName . "</td>";
                $display .= "<td>" . $email . "</td>";
                $display .= "<td>" . $city . "</td>";
                $display .= "<td>" . $year2 . "</td>";                
                $display .= "</tr>";
            }

            fclose($fp);

            echo $display;   //This prints the table rows

            ?>
        </table>
    </div>
</body>

</html> 