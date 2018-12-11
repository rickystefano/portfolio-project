<?php

// DB connect.
$dbname = 'u528101_p5eind';
$dbuser = 'u528101_p5eind';
$dbpass = 'Asus1309';
$dbhost = 'localhost';

$dbconn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

// Get current vidID from DB.
if(isset($_REQUEST['update']) && $_REQUEST['update']){
    
    $sql  = "SELECT * FROM vid_id WHERE id = 1";
    $stmt = $dbconn->query($sql);

    $res = $stmt->fetch_assoc();
    echo json_encode(array(
        "url" => (string)$res["active_id"],
        "isPaused" => $res["is_paused"]
    ));
    
}

// Update with new vidID.
if(isset($_REQUEST['change']) && $_REQUEST['change']){

    if(strlen($_REQUEST['channel']) > 1){
        $sql  = "UPDATE vid_id SET active_id = ?, is_paused = 0 WHERE id = 1";
        $stmt = $dbconn->prepare($sql);
        $stmt->bind_param('s', $_REQUEST['channel']);
    } else {
        $sql = "UPDATE vid_id SET is_paused = ? WHERE id = 1";
        $stmt = $dbconn->prepare($sql);
        $stmt->bind_param('i', $_REQUEST['channel']);
    }
    $stmt->execute();
}
?>