<?php
if(isset($_REQUEST['chatMsg'])){
	
	// // Query insert the chat.
	// $query = $db->prepare("INSERT INTO chats (username, message) VALUES (?,?)");
	// $query->execute(array($_REQUEST['username'], $_REQUEST['chatMsg']));

	$db_server	= '';
	$db_name 	= '';
	$db_user 	= '';
	$db_pass 	= '';

	$room = (int)$_REQUEST['server'];

	$conn = new mysqli($db_server, $db_name, $db_pass, $db_name);

	$sql  = "INSERT INTO `$room` (username, message) VALUES (?,?)";


	$stmt = $conn->prepare($sql);
	$stmt->bind_param('ss', $_REQUEST['username'], $_REQUEST['chatMsg']);
	$stmt->execute();
}
