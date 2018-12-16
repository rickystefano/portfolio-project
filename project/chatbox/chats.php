<?php
// Connect PDO.
$db_name = '';
$db_user = '';
$db_pass = '';
$db = new PDO('mysql:host=localhost;dbname='.$db_name, $db_user, $db_pass);

$room = (int)$_REQUEST['server'];

// Query the last 50 chats.
$query = $db->prepare("SELECT username, message FROM `$room` ORDER BY added ASC");
$query->execute();

// Get the chats and wrap them in HTML.
while($result=$query->fetch(PDO::FETCH_ASSOC)){
	print '<div class="chat">';
	print '<span>'.$result['username'].' zegt: </span>';
	print $result['message'];
	print '</div>';
}
