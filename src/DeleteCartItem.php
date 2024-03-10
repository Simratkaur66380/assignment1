<?php
include('dbConnection.php');

$cartId = "";
// Check for POST parameters
$post_data = json_decode(file_get_contents("php://input"), true);
if (isset($post_data['cartId'])) {
    $cartId = $post_data['cartId'];
} else {
    die(json_encode(['error' => 'Missing POST parameters']));
}
// Insert order into the database
$query = "
DELETE FROM `cart` WHERE `cartId` = '$cartId'";
$result = mysqli_query($conn, $query);

// Check for errors
if (!$result) {
    die(json_encode(['error' => 'Failed to delete cart']));
}

// Return success response
echo json_encode(['message' => 'cart deleted successfully']);

// Close database connection
mysqli_close($conn);
?>

