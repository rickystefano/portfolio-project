<?php

$user   = "root";
$pass   = "";
$server = "localhost";
$db     = "info";

$conn = new mysqli($server, $user, $pass, $db);

if (!$conn) {
 die('Connection failed: ' . $conn->connect_error);
}

function request_data($id, $data_type){
  global $conn;

  $query = "SELECT * FROM ghibli WHERE id = $id";
  $result = mysqli_query($conn, $query);

  while($row = $result->fetch_assoc()){
    $data_return = $row[$data_type];
  }

  return $data_return;
}

?>
