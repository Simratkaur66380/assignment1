<?php
include('dbConnection.php');

$email = "";
$password = "";
$username = "";
$purchaseHistory = "";
$shippingAddress = "";
// Check for POST parameters
$post_data = json_decode(file_get_contents("php://input"), true);
if (isset($post_data['email'], $post_data['password'], $post_data['username'], $post_data['purchaseHistory'] , $post_data['shippingAddress'])) {
    $email = $post_data['email'];
    $password = $post_data['password'];
    $username = $post_data['username'];
    $purchaseHistory = $post_data['purchaseHistory'];
    $shippingAddress = $post_data['shippingAddress'];
} else {
    die(json_encode(['error' => 'Missing POST parameters']));
}
// Insert order into the database
$query = "
INSERT INTO `users` 
(`userId`, `email`, `password`, `username`, `purchaseHistory`, `shippingAddress`) 
VALUES 
(NULL, '$email', '$password', '$username', '$purchaseHistory', '$shippingAddress');
";
$result = mysqli_query($conn, $query);

// Check for errors
if (!$result) {
    die(json_encode(['error' => 'Failed to Add User']));
}

// Return success response
echo json_encode(['message' => 'User added successfully']);

// Close database connection
mysqli_close($conn);
?>

