<html>
<head>
    <link rel="stylesheet" href="css/assignment_1.css">

</head>

    <body>
        <div id="logo">
            <img src="http://profperry.com/Classes20/PHPwithMySQL/KingLibLogo.jpg" alt="King Library Logo">
        </div>

    <div id="patron">
        <h4>Thank You for Registering!</h4>
        
        <?php 
            $firstName =$_POST['firstname'];
            $lastName =$_POST['lastname'];
            $fullName = $firstName . " " . $lastName;
            $email = $_POST['email'];
            $city = $_POST['city'];


            echo "Name: " . $fullName . "<br>";
            echo "<br>";
            echo "\n" . "Email: " . $email . "<br>";
            echo "<br>";
            echo "\n" . "City: " . $city;

        ?>
    </div>
    </body>
</html>