<html>

<head>
    <link rel="stylesheet" href="css\assignment_8.css">
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
            // 
            $display .= "<tr><th>Last Name</th><th>First Name</th><th>Email</th><th>City</th><th>Birth Year</th></tr>";
            // while (true) {
            //     $line = fgets($fp);

            //     if (feof($fp)) {
            //         break;
            //     }

            //     $line_ctr++;

            //     $line_ctr_remainder = $line_ctr % 2;

            //     if ($line_ctr_remainder == 0) {
            //         $style = "style='background-color: #FFFFCC;'";
            //     } else {
            //         $style = "style='background-color: white;'";
            //     }

            //     list($lastName, $firstName, $email, $city, $year2) = explode('|', $line); 

            //     $display .= "<tr $style>";
            //     $display .= "<td>" . $lastName . "</td>";
            //     $display .= "<td>" . $firstName . "</td>";
            //     $display .= "<td>" . $email . "</td>";
            //     $display .= "<td>" . $city . "</td>";
            //     $display .= "<td>" . $year2 . "</td>";                
            //     $display .= "</tr>";
            // }
            include "assignment_6_db_functions.php";
            $db = connectDatabase();

            $sql_statement  = "select lastname, firstname, city, email, birthyear from patron ";
            
            
            $sql_statement .= "ORDER BY lastname, firstname";
            
            $result = mysqli_query($db, $sql_statement);  // Run SELECT
            
            $display = "";
            $myrowcount = 0;
            
            if (!$result) {
                $display .= "<p style='color: red;'>MySQL No: ".mysqli_errno($db)."<br>";
                $display .= "MySQL Error: ".mysqli_error($db)."<br>";
                $display .= "<br>SQL: ".$sql_statement."<br>";
            } else {
                        
                $display .= '<table border=1 style="color: black;">';
                $display .= '<tr><th>Last Name</th><th>First Name</th><th>Email</th><th>City</th><th>Birth Year</th></tr>';
            
                $numresults = mysqli_num_rows($result);
            
                for ($i = 0; $i < $numresults; $i++)
                {
                    if (!($i % 2) == 0)
                    {
                         $display .= "<tr style=\"background-color: #FFFFCC;\">";
                    } else {
                         $display .= "<tr style=\"background-color: white;\">";
                    }
            
                    $myrowcount++;
            
                    $row = mysqli_fetch_array($result);
            
                    $lastname  = $row['lastname'];
                    $firstname = $row['firstname'];
                    $email = $row['email'];
                    $city = $row['city'];
                    $year2 = $row['birthyear'];
            
                    $display .= "<td>".$lastname."</td>";
                    $display .= "<td>".$firstname."</td>";
                    $display .= "<td>".$email."</td>";
                    $display .= "<td>".$city."</td>";
                    $display .= "<td>".$year2."</td>";
            
                    $display .= "</tr>";
            
                }
            
                $display .= "</table>";
            
            }
            

            echo $display;   //This prints the table rows

            ?>
        </table>
    </div>
</body>

</html> 