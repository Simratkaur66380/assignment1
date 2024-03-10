<?php
include('dbConnection.php');

$query = "SELECT * FROM cart";
$result = mysqli_query($conn, $query);

if (!$result) {
    die(json_encode(['error' => 'Failed to retrieve cart Items']));
}

$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode(['cart' => $data]);

mysqli_close($conn);
?>
