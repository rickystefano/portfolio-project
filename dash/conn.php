<?php
//db on localhost
$user = "root";
$pass = "";
$host = "localhost";
$db = "portfolio";

$conn = new mysqli($host, $user, $pass, $db);

if (!$conn) {
  echo "Het werkt niet!";
}
?>