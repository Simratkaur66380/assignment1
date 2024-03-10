<?php
include('dbConnection.php');

$cartId = "";
$productId = "";
$userId = "";
$quantity = "";
// Check for POST parameters
$post_data = json_decode(file_get_contents("php://input"), true);
if (isset( $post_data['quantity'] , $post_data['cartId'])) {
    $cartId = $post_data['cartId'];

    $quantity = $post_data['quantity'];
} else {
    die(json_encode(['error' => 'Missing POST parameters']));
}
// Insert order into the database
$query = "
UPDATE  `cart` SET `quantity` = '$quantity'  WHERE `cartId` = '$cartId'";
$result = mysqli_query($conn, $query);

// Check for errors
if (!$result) {
    die(json_encode(['error' => 'Failed to update cart']));
}

// Return success response
echo json_encode(['message' => 'cart updated successfully']);

// Close database connection
mysqli_close($conn);
?>

