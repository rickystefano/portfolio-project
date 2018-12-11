<?php

// Start pointer: Use POST, but if there is no POST use 0.
$from = isset($_POST['from']) ? $_POST['from'] : 0;

// Connect PDO.
$db_name = 'uitleg_0402';
$db_user = 'root';
$db_pass = '';
$db = new PDO('mysql:host=localhost;dbname='.$db_name, $db_user, $db_pass);

// Query messages, let from be given by external script (ajax).
$query = $db->prepare("SELECT * FROM items ORDER BY added DESC LIMIT :from, 3");
$query->bindValue(':from', (int) $from, PDO::PARAM_INT);
$query->execute();

// Get the messages and wrap them in HTML.
while($result=$query->fetch(PDO::FETCH_ASSOC)){
	print '<section>'.PHP_EOL;
	print '<h3>'.$result['title'].'</h3>'.PHP_EOL;
	print '<p>'.$result['message'].'</p>'.PHP_EOL;
	print '</section>'.PHP_EOL;
}




