<!-- <?php
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'webassignment2';

$conn = mysqli_connect($host, $username, $password, $database);

if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}





?> -->


<?php

// Database connection parameters
$host = 'localhost';
$user = 'root';
$password = ''; // Change this to your MySQL password
$database = 'webassignment2';

// Create a connection
$conn = new mysqli($host, $user, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected to MySQL database";

// Close the connection
// $conn->close();

?>

