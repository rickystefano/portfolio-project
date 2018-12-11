<?php
require_once "connect.php";
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Ghibli Studio</title>
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width">
    <style media="screen">
      <?php for ($i=1; $i<23; $i++) {
        echo "#movie_$i{
          background-image: url('".request_data($i, "img_src")."');
          background-position: center;
        }";
      } ?>
    </style>
  </head>
  <body>
    <div id="main_container">
      <div id="main_top">
        <img src="media/logo.png">
      </div><!-- main_top -->
      <div id="main_content">
        <?php
        for($i=1; $i<23; $i++)
          {echo "<div class='items_container' id='movie_$i' onclick='redirect($i)'></div>";}?>
      </div><!-- main_content -->
    </div><!-- main_container -->
    <script>
     function redirect(movieId){
       window.location.href = 'result.php?movie_id=' + movieId;
     }
    </script>
  </body>
</html>
