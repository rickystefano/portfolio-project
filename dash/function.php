<?php
//require connection
require_once "conn.php";

if ($_REQUEST["action"] === "project") {
  $tags = $_REQUEST["tags"];

  if ($tags == "all") {
    $query = "SELECT pr.pr_name AS name, pr.pr_desc as description, pr.pr_thumbnail AS path, pr.pr_link AS link FROM pr";
    $stmt = $conn->prepare($query);
  } else {
    $query = 'SELECT pr.pr_name AS name, pr.pr_desc as description, pr.pr_thumbnail AS path, pr.pr_link AS link FROM pr JOIN pr_tags ON pr.pr_id = pr_tags.pr_tags_pr_id JOIN tags ON pr_tags.pr_tags_tags_id = tags.tags_id WHERE tags.tags_name = ?';
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $tags);
  }

  $stmt->execute();
  $stmt->bind_result($name, $desc, $path, $link);

  while ($stmt->fetch()) :

  ?>
    <div class="projects-item" data-target="<?php echo $link; ?>">
      <h2><?php echo $name; ?></h2>
      <figure>
        <img src="./img/thumbnails/<?php echo $path; ?>" />
        <div class="see"><i>See in detail..</i></div>
      </figure>
      <p>
        <?php echo $desc; ?>
      </p>
    </div> 
  <?php
  endwhile;
  $stmt->close();
}

?>