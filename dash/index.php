<?php 
require "conn.php";
session_start();
?>
<?php if (isset($_REQUEST["upload"])) {
  $title = $_REQUEST["title"];
  $desc = $_REQUEST["desc"];
  $tags = $_REQUEST["tags"];

  if ($_FILES['thumbnail']["tmp_name"] != "") {
    $dir = "../img/thumbnails/";
    $file = $dir . $_REQUEST["title"] . "_thumbnail.jpg";
    $name = $_FILES['thumbnail']['tmp_name'];


    if (!move_uploaded_file($name, $file)) {
      echo 'File upload failed<br/><br/>!';
      echo '<pre>';
      print_r($_FILES['thumbnail']['error']);
      echo '</pre>';
    }
  } else {
    $file = "no_thumbnail.jpg";
  }


  echo $title . "<br>";
  echo $desc . "<br>";
  echo $file . "<br>";

  $query1 = "INSERT INTO pr (pr_name, pr_desc, pr_thumbnail) VALUES (?,?,?)";
  $stmt1 = $conn->prepare($query1);
  $stmt1->bind_param('sss', $title, $desc, $file);
  $stmt1->execute();

  $query2 = "SELECT pr_id FROM pr WHERE pr_title = ?";
  $stmt2 = $conn->prepare($query2);

  $stmt2->bind_param('s', $title);
  $stmt2->execute();
  $res->fetch_assoc();

  echo $res;

  for ($i = 0; $i < count($tags); $i++) {
    $query3 = "INSERT INTO pr_tags (pr_tags_pr_id, pr_tags_tags_id) VALUES (?,?)";
    $stmt3 = prepare($query3);
    $stmt3->bind_param('is', $res, $_SESSION[$tags[$i]]);
    $stmt3->execute();
  }
}

$sql = $conn->query("SELECT * FROM `tags`");
?>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ricky's Dashboard</title>
  </head>
  <body>
    <form enctype='multipart/form-data' action="" method="post">
      <label for="title">Title: </label><input type="text" name="title" placeholder="Title"><br/>
      <label for="desc">Description: </label><input type="text" name="desc" placeholder="Description"><br/>
      <label for="tags">Tags: </label><br/>
      <?php
      while ($res = $sql->fetch_assoc()) {
        $_SESSION[$res["tags_name"]] = $res["tags_id"];
        echo '<input type="checkbox" name="tags[]" value=' . $res["tags_name"] . '>' . $res["tags_name"] . '<br/>';
      }
      ?>
      <label for="thumbnail">Thumbnail: </label><input type="file" name="thumbnail"><br/>
      <input type="submit" name="upload" value="Upload">
  </form>
</body>
</html>