<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Login Validation</title>

        <link rel="stylesheet" href="css\assignment_8.css">
    </head>
    <?php 
        <body>
            <h2 id='loginval'>Login Validation</h2>
            <h2>Enter User ID/ Password to Login:</h2>


            <div id="patron">
                <form method="post" id="myform" action="assignment_6_add_patron.php">
                    <p>User ID: <input type="text" name="user" id="user"></p>
                    <p>Password: <input type="password" name="password" id="pass"></p>
                    <p><input type="button" value="Login" id="Login"></p>

                    <p>
                        <input type="submit" id="submit" value="Submit Information">
                    </p>

                    </form>
                    <p>
                    For Admin Use only: 
                    <a href="assignment_6_view_patron.php">
                        <span style="text-decoration: underline; color: blue;">View Patrons</span>
                    </a>
                </p>
            </div>
        </body>
    ?>
</html>
