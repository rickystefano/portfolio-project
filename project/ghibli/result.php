<?php
  require_once 'connect.php';
  $movie_id         = $_GET['movie_id'];
  $movie_title      = request_data($movie_id, 'title');
  $movie_director   = request_data($movie_id, 'director');
  $movie_rel_date   = request_data($movie_id, 'rel_date');
  $movie_run_time   = request_data($movie_id, 'run_time');
  $movie_budget     = request_data($movie_id, 'budget');
  $movie_box_office = request_data($movie_id, 'box_office');
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width">
    <style media="screen">
    <?php
    if ($movie_id != 22) {
      echo 'body {
        background-image: url("media/bg'.$movie_id.'.jpg");
        background-size: cover;
      }';
    }
    ?>
    </style>
  </head>
  <body>
    <div id="main_container">
      <div id="main_top">
        <h1><?php echo $movie_title; ?></h1>
      </div><!-- main_top -->
      <div id="main_content">
        <video src="media/video<?php echo $movie_id; ?>.mp4" autoplay width="80%" controls>
          Video is not available for this movie.
        </video>
        <div id="main_sub_content">
          <table>
            <tr>
              <td class="to_right">Director</td>
              <td>: <?php echo $movie_director; ?></td>
            </tr>
            <tr>
              <td class="to_right">Release Date</td>
              <td>: <?php echo $movie_rel_date; ?></td>
            </tr>
            <tr>
              <td class="to_right">Run Time</td>
              <td>: <?php echo $movie_run_time; ?> minutes</td>
            </tr>
            <tr>
              <td class="to_right">Budget</td>
              <td>: <?php if(is_null($movie_budget)):
                echo '<span class="null">No data found.</span>';
              else: echo '&dollar;'.$movie_budget.' Million'; endif;?></td>
            </tr>
            <tr>
              <td class="to_right">Box Office</td>
              <td>: <?php if(is_null($movie_box_office)):
                echo '<span class="null">No data found.</span>';
              else: echo '&dollar;'.$movie_box_office.' Million'; endif;?></td>
            </tr>
          </table>
        </div>
      </div><!-- main_content -->
    </div><!-- main_container -->
  </body>
</html>
