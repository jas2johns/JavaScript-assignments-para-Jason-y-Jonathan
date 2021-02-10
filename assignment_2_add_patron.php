<html>
<head>
    <link rel="stylesheet" href="css/assignment_2.css">

</head>

    <body>
        <div id="logo">
            <img src="http://profperry.com/Classes20/PHPwithMySQL/KingLibLogo.jpg" alt="King Library Logo">
        </div>

    <div id="patron">
        <h4></h4>
        <?php 
            $firstName = $_POST['firstname'];
            $lastName = $_POST['lastname'];
            $fullName = $firstName . " " . $lastName;
            $email = $_POST['email'];
            $city = $_POST['city'];
            $fullNameTrue = true;
            //$thanks = getElementsByTagName('h4') ;
            $thanks2 = 'Thank You for Registering!';
            $registerTrue = true;

            // write an if statement whether they registered succesfully
                //ok so like install another 'flag boolean' to trgger when true then echo
                    //
        
        
                    //OK u must fix the html tags in it's spacing
        
                    //also fix the birth year thingy form element and wirte an if statement to code it
        
                    // lastly fix the CSS for the purple div/body thingy  AS OF Feb 9th 2021
        
        
            if ($firstName == '') {
                echo "<p>Error: You must enter a First Name </p>";
                $fullNameTrue = false;
                $registerTrue = false;
            }
            else {
                $fullNameTrue = true;
                //return;
            }
            if ($lastName == '') {
                echo "<p>Error: You must enter a Last Name </p>";
                $fullNameTrue = false;
                $registerTrue = false;
            }
            // NO Else statement
            if ($fullNameTrue == false) {
                $registerTrue = false;
                }
            //no else statement
            else {
                echo "<p>Name: " . $fullName . "</p><br>";
                //return;   
            }
            if ($email == '') {
                echo "<p>Error: You must enter an Email Address </p>";
                $registerTrue = false;
            }
            else {
                echo "<br><p>";
                echo "\n" . "Email: " . $email . "<br></p>";
                //return;
            }
        
            // birth year code needed!!!!!!
                // if and else if then else
                    // so... yea
        
        
            if ($city == '-') {
                echo "<p>Error: You must select a City </p>";
            } 
            else {
                echo "<br><p>";
                echo "\n" . "City: " . $city . "</p>";
                //return;
            }
            if($registerTrue == false) {
                
            }
            else {
                echo //$thanks3 ;
            }
        
        // also add the 'GO BACK AND MAKE CORRECTIONS' msg if its false
        ?>
    </div>
    </body>
</html>