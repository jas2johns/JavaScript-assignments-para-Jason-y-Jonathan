<?php 

//require('../../DBtest_pptest.php');

//IMPORTANT: Instead of using '7admin7 for the $userid, look up your user id at the top of the SQL Practice Window and use that instead!
function connectDatabase() {
$host = 'localhost';
$userid = 'root';
$password = '';
$dbname = 'assignment_6';

$db = mysqli_connect($host, $userid, $password, $dbname);
if (!$db)
{
   print "<h1>Unable to Connect to MySQLi</h1>";
   exit;
}

return $db;
}
function insertPatron($db, $lastname, $firstname, $email, $city, $year2){

	$statement 	= "insert into patron (lastname, firstname, email, city, birthyear) ";
	$statement .= "values (";
	$statement .= "'".$lastname."', '".$firstname."', '".$email."','".$city."','".$year2."'";
	$statement .= ")";

	$result = mysqli_query($db, $statement);

	if ($result)
	{
		return;
	} else {
	    $errno = mysqli_errno($db);

	        echo("<h4>MySQL No: ".mysqli_errno($db)."</h4>");
			echo("<h4>MySQL Error: ".mysqli_error($db)."</h4>");
			echo("<h4>SQL: ".$statement."</h4>");
			echo("<h4>MySQL Affected Rows: ".mysqli_affected_rows($db)."</h4>");
		
		return 'NotAdded';
	}
} 
?>