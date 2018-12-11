<?php
  function login_admin($username, $password, $conn) {
    $sql = 'SELECT * FROM user WHERE username = ? AND password = ? ';
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ss', $username, $password);
    $stmt->execute();

    $result = $stmt->get_Result();
    if ($row = $result->fetch_assoc()) {
      $_SESSION['loged_in'] = true;
      $_SESSION['username'] = $row['name'];
      header('Location: customize.php');
    } else {
      echo '<p style="margin: 0 auto; position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%)">Your username and password combination is incorrect. Please try again.</p>';
    }
  }

  function loguit_admin() {
    unset($_SESSION['loged_in']);
    unset($_SESSION['username']);
  }

  function delete_post($table, $id, $conn) {
    $sql = 'DELETE FROM '.$table.' WHERE id = '.$id;

    if ($conn->query($sql) === TRUE) {
      header('Location: customize_detail.php?category='.$table);
    } else {
      echo "Error deleting record: " . $conn->error;
    }
  }

  function show_content_list($table, $conn) {
    $sql = 'SELECT * FROM ';
    $sql .= $table;
    $result = $conn->query($sql);

    while ($row = $result->fetch_assoc()) :
      ?>
      <tr>
        <td><?php echo $row['id']; ?></td>
        <td><?php echo $row['title']; ?></td>
        <td><?php echo $row['date']; ?></td>
        <td><?php echo $row['author']; ?></td>
        <td><a href="customize_detail.php?action=delete&category=<?php echo $table; ?>&id=<?php echo $row['id']; ?>">Delete</a></td>
      </tr>
      <?php
    endwhile;
  }

  function upload_post($title, $content, $img, $author, $category, $upload_type, $id, $conn){
    if ($upload_type == 'add') {
      $sql = 'INSERT INTO '.$category.'(title, content, img, date, author) VALUES (?,?,?,?,?)';
    } else {
      $sql = 'UPDATE '.$category.' SET title = ?, content = ?, img = ?, date = ?, author = ? WHERE id = '.$id;
    }


    $stmt = $conn->prepare($sql);
    $stmt->bind_param('sssss', $title, $content, $img, date("Y-m-d"), $author);
    $stmt->execute();

    echo '<script>alert("Post has been succesfully added!")';
    header('Location: customize.php');
  }
?>
