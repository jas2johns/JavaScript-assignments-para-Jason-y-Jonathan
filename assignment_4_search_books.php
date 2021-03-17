<?php

    // Grab the search term from the form data
    $searchTerm = $_POST["searchTerm"];
    // Grab the sort direction from the form data
    $sortDirection = $_POST["sortDirection"];
    
    // read the lines out of the text file    
    $fp = fopen('data/booklist.txt', 'r');   //opens the file for reading
    
    $searchResults = array();

    // if any of the lines contain the search term, keep track of it
    while (true) {
        $line = fgets($fp);

        // if the search term is an empty string, do not filter results
        if(empty($searchTerm)) {
            array_push($searchResults, $line);
        }        
        // if the search term exists in any line (case-insensitive), do something
        else if (stripos($line, $searchTerm) > -1) {
            array_push($searchResults, $line);
        } 
        else {
            // don't add this line to the results
        }

        if (feof($fp)) {
            break;
        }
    }

    // print out the results in a table, sorted in whatever direction
    
    // make sure to sort according to the desired direction
    if($sortDirection == "ascending") {
        sort($searchResults);
    } else if($sortDirection == "descending") {
        rsort($searchResults);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Search Results</title>
    <link rel="stylesheet" href="css/KingLib_3.css">
</head>
<body>
    <h1>Current Titles</h1>
    <?php
        if($sortDirection == "ascending") {
            echo "<h3>(Sorted in Alphabetical Order)</h3>";
        } else if($sortDirection == "descending") {
            echo "<h3>(Sorted in Reverse Alphabetical Order)</h3>";
        }
    ?>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>ISBN</th>
                <th>Type</th>
                <th>Publication Date</th>
            </tr>
        </thead>
        <tbody>
            <?php
                for($i = 0; $i < count($searchResults); $i++) {
                    // explode on the asterisk, so you can get your discrete column values
                    $bookDetailArray = explode("*", $searchResults[$i]);

                    // assign each value to a variable
                    $title = $bookDetailArray[0];
                    $type = $bookDetailArray[1];
                    $pubDate = $bookDetailArray[2];
                    $isbn = $bookDetailArray[3];
                    ?>
                        <tr>
                            <td><?php echo $title; ?></td>
                            <td><?php echo $type; ?></td>
                            <td><?php echo $pubDate; ?></td>
                            <td><?php echo $isbn; ?></td>
                        </tr>
                    <?php
                }
            ?>
        </tbody>    
    </table>
</body>
</html>