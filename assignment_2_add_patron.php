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
            $firstName =$_POST['firstname'];
            $lastName =$_POST['lastname'];
            $fullName = $firstName . " " . $lastName;
            $email = $_POST['email'];
            $city = $_POST['city'];
            $fullNameTrue = true;

            // write an if statement whether they registered succesfully
            //<h4>Thank You for Registering!</h4>
        
            if ($firstName = ' ') {
                echo "<p>Error: You must enter a First Name </p>";
                $fullNameTrue = false;
            }
            else {
                $fullNameTrue = true;
                return;
            }
            if ($lastName = ' ') {
                echo "<p>Error: You must enter a Last Name </p>";
                $fullNameTrue = false;
            }
            // NO Else statement
            if ($fullNameTrue = false) {
                //return;
                }
            //no else statement
            else {
                echo "<p>Name: " . $fullName . "</p><br>";
                return;   
            }
            if ($email = ' ') {
                echo "<p>Error: You must enter an Email Address </p>"; 
            }
            else {
                echo "<br>";
                echo "\n" . "Email: " . $email . "<br>";
                //return;
            }
        
            // birth year code needed!!!!!!
        
        
            if ($city = '-') {
                echo "<p>Error: You must select a City </p>";
            } 
            else {
                echo "<br>";
                echo "\n" . "City: " . $city;
                //return;
            }


        ?>
    </div>
    </body>
</html>