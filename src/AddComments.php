<?php
include('dbConnection.php');

$user_id = "";
$product_id = "";
$rating = "";
$text = "";
$image = "";
// Check for POST parameters
$post_data = json_decode(file_get_contents("php://input"), true);
if (isset($post_data['userId'], $post_data['productId'], $post_data['rating'], $post_data['text'] , $post_data['image'])) {
    $user_id = $post_data['userId'];
    $product_id = $post_data['productId'];
    $rating = $post_data['rating'];
    $image = $post_data['image'];
    $text = $post_data['text'];
    $image = $post_data['image'];
} else {
    die(json_encode(['error' => 'Missing POST parameters']));
}
// Insert order into the database
$query = "
INSERT INTO `comments` 
(`commentId`, `productId`, `userId`, `rating`, `image`, `text`) 
VALUES 
(NULL, '$product_id', '$user_id', '$rating', '$image', '$text');
";
$result = mysqli_query($conn, $query);

// Check for errors
if (!$result) {
    die(json_encode(['error' => 'Failed to add comment']));
}

// Return success response
echo json_encode(['message' => 'comment added successfully']);

// Close database connection
mysqli_close($conn);
?>

