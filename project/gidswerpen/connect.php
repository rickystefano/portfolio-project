<?php
  $server   = 'localhost';
  $name     = 'root';
  $password = '';
  $dbname   = 'gidswerpen';

  $conn = new mysqli($server, $name, $password, $dbname);

  if ($conn->connect_error) {
    die('De verbinding kan niet worden gemaakt: '.$conn->connect_error);
  }

?>
