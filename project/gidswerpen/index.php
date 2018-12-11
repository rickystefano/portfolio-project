<?php 
  include 'connect.php';
  include 'functions.php';
 ?>
<!DOCTYPE html5>
<html lang="en" dir="en">

<head>
  <meta charset="utf-8">
  <title>Gidswerpen</title>
  <link rel="stylesheet" href="css/style.css">
  <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
</head>

<body>
  <nav>
    <div id="navbar">
      <img src="img/logo.png" alt="logo">
    </div>
    <div id="navbar2">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#gids">Gids</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
  <section id="home">
    <img src="img/homepage.png" style="width: 100%;" alt="Picture">
  </section>
  <section id="news">
    <!-- Newsblokken -->

   
      <?php
	$news_colors = array('#db8230','#3fc833','#c83333','#333dc8');
        $sql_news = 'SELECT * FROM news ORDER BY id DESC';
        $news_max = 4;
        $result_news = $conn->query($sql_news);

        while ($row = $result_news->fetch_assoc()) :
          ?>
          <div class="newsblok" style="overflow-y: hidden">
            <img src="<?php echo $row['img']; ?>" alt="">
            <div class="overlay" style="background-color: <?php echo $news_colors[$news_max-1]; ?>"></div>
            <div class="overlaywhite">
              <h3><?php echo $row['title']; ?></h3>
              <p><?php echo $row['content']; ?></p>
            </div>
          </div>
          <?php
        $news_max = $news_max - 1;
        if ($news_max == 0) {
          break;
        }
        endwhile;
      ?>

 <!--
    <div class="newsblok" style="overflow-y: hidden">
      <img src="img/1.png" alt="">
      <div class="overlay"></div>
      <div class="overlaywhite">

      </div>
    </div>
-->	

  </section>
  <section id="gids">
      <?php
	
        $sql_guides = 'SELECT * FROM guides ORDER BY id DESC';
        $max_guides = 4;
        $result_guides = $conn->query($sql_guides);

        while ($row = $result_guides->fetch_assoc()) :
        ?>
        <div class="gidsblok" style="background-color: <?php echo $news_colors[$max_guides-1]; ?>">
            <figure>
              <img src="<?php echo $row['img']; ?>" alt="">
            </figure>
          <div class="gids-content">
            <h3><?php echo $row['title']; ?></h3>
            <p><?php echo $row['content']; ?></p>
          </div>
        </div>
        <?php
        $max_guides = $max_guides - 1;
        if ($max_guides == 0) {
          break;
        }

        endwhile;
      ?>
    <!-- <div class="gidsblok">
      <div id="googleMap">

      </div>
    </div>
    <div class="gidsblok">
      <div id="googleMap2">

      </div>
    </div>
    <div class="gidsblok">
      <div id="googleMap3">

      </div>
    </div>
    <div class="gidsblok">
      <div id="googleMap4">

      </div>
    </div> -->
  </section>
  <section id="contact">
    <div class="contactblok">
      <h1>Marissa shen<br>marissashen@gmail.com</h1>
      <div class="foto">
        <img src="img/p1.png" style="width:100%;" alt="">
      </div>
    </div>
    <div class="contactblok">
      <h1>Virat Kohli<br>Viratkohli@gmail.com</h1>
      <div class="foto">
        <img src="img/p2.png" style="width:120%; height:100%; " alt="">
      </div>
    </div>
  </section>
  <footer class="footer">
    <div class="footerContainer">
      <p class="copyright">© Gidswerpen 2018</p>
    </div>
  </footer>
</body>
<script type="text/javascript" src="js/function.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwXgLbUXVg2RDwkjFWFZEjoXWWGnDl9uI&callback=myMap "></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwXgLbUXVg2RDwkjFWFZEjoXWWGnDl9uI&callback=myMape "></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwXgLbUXVg2RDwkjFWFZEjoXWWGnDl9uI&callback=myMapee "></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwXgLbUXVg2RDwkjFWFZEjoXWWGnDl9uI&callback=myMapeee "></script>

</html>