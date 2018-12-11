<?php
if(isset($_REQUEST['chatMsg'])){
	
	// Connect PDO.
	// $db_name = 'u528101_chatbox';
	// $db_user = 'u528101_chatbox';
	// $db_pass = 'Asus1309';
	// $db = new PDO('mysql:host=localhost;dbname='.$db_name, $db_user, $db_pass);
	
	// // Query insert the chat.
	// $query = $db->prepare("INSERT INTO chats (username, message) VALUES (?,?)");
	// $query->execute(array($_REQUEST['username'], $_REQUEST['chatMsg']));

	$db_server	= 'localhost';
	$db_name 	= 'u528101_chatbox';
	$db_user 	= 'u528101_chatbox';
	$db_pass 	= 'Asus1309';

	$room = (int)$_REQUEST['server'];

	$conn = new mysqli($db_server, $db_name, $db_pass, $db_name);

	$sql  = "INSERT INTO `$room` (username, message) VALUES (?,?)";


	$stmt = $conn->prepare($sql);
	$stmt->bind_param('ss', $_REQUEST['username'], $_REQUEST['chatMsg']);
	$stmt->execute();
}
