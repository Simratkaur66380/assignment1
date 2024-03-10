<?php
include('dbConnection.php');

$user_id = "";
$product_id = "";
$quantity = "";
// Check for POST parameters
$post_data = json_decode(file_get_contents("php://input"), true);
if (isset($post_data['userId'], $post_data['productId'], $post_data['quantity'])) {
    $user_id = $post_data['userId'];
    $product_id = $post_data['productId'];
    $quantity = $post_data['quantity'];
   
} else {
    die(json_encode(['error' => 'Missing POST parameters']));
}
// Insert order into the database
$query = "
INSERT INTO `cart` 
(`cartId`, `productId`, `userId`, `quantity`) 
VALUES 
(NULL, '$product_id', '$user_id', '$quantity');
";
$result = mysqli_query($conn, $query);

// Check for errors
if (!$result) {
    die(json_encode(['error' => 'Failed to add to cart']));
}

// Return success response
echo json_encode(['message' => 'added to cart successfully']);

// Close database connection
mysqli_close($conn);
?>

