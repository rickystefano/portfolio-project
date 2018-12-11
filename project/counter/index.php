<?php
  session_start();

  $clickGreen = 0;
  $clickRed = 0;

  if(!isset($_SESSION['clickGreen']) && !isset($_SESSION['clickRed'])){
    $_SESSION['clickGreen'] = $clickGreen;
    $_SESSION['clickRed'] = $clickRed;
  }

  if($_SERVER['REQUEST_METHOD'] === 'POST'){

      if(!empty($_POST['SubmitGreen'])){
        $_SESSION['clickGreen']++;
      }

      if(!empty($_POST['SubmitRed'])){
        $_SESSION['clickRed']++;
      }

      if(isset($_POST["SubmitRefresh"])){
        session_destroy();
      }

      header('Location: index.php');
  }

  else{
    $g = $_SESSION['clickGreen'];
    $r = $_SESSION['clickRed'];
  }

?>
<html>
  <head>
    <style>
      div{
        border: 1px black solid;
        display: inline-block;
        padding: 20px;
        margin-left: 700px;
        margin-top: 300px
      }
      #rood{
        height: 100px;
        width: 100px;
        background-color: #ff0000;
      }
      #groen{
        height: 100px;
        width: 100px;
        background-color: #00ff00;
      }
    </style>
  </head>
  <body>
    <div>
      Aantal keer klik groen = <?php echo $g ?><br/>
      Aantal keer klik rood = <?php echo $r ?><br/>
      <form name="form1" method="post" action="index.php">
        <input id="groen"type="submit" name="SubmitGreen" value=" " />
        <input id="rood"type="submit" name="SubmitRed" value="  " />
        <input type="submit" name="SubmitRefresh" value="Refresh" />
      </form>
    </div>
  </body>
</html>
