<?php
include('dbConnection.php');

$query = "SELECT * FROM users";
$result = mysqli_query($conn, $query);

if (!$result) {
    die(json_encode(['error' => 'Failed to retrieve products']));
}

$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode(['users' => $data]);

mysqli_close($conn);
?>
