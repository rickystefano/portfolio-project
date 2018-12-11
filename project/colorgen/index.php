<!DOCTYPE html>
<html>
  <head>
    <style>
      #box{
        height: 500px;
        width: 500px;
        background-color: #ffffff;
        border: 1px solid #000;
      }
      .button{
        margin-top: 10px
      }
    </style>
    <script>
      function changeMe(number){ //change the color of the div
        var color = document.getElementById('box');
        switch (number) {
          case 0:
            color.style.backgroundColor =
              <?php
                echo "\"#ff0000\"";
               ?>;
            break;
            case 1:
              color.style.backgroundColor =
                <?php
                  echo "\"#00ff00\"";
                 ?>;
            break;
            case 2:
              color.style.backgroundColor =
                <?php
                  echo "\"#0000ff\"";
                 ?>;
              break;
            case 3:
              color.style.backgroundColor =
                <?php
                  echo "\"#ffffff\"";
                 ?>;
              break;
            case 4:
              color.style.backgroundColor =
                <?php
                  echo "\"#000\"";
                 ?>;
              break;
            case 5:
              color.style.backgroundColor = getRandomColor();
              break;
        };
      }

      function getRandomColor() {
        var str = '#';
        var options = '0123456789ABCDEF';
        for(var i=0; i<6; i++) {
          var randomPick = randomNumBetween(0, (options.length)-1);
          var char       = options[randomPick];
          str += char;
        }
        return str;
      }

      function randomNumBetween(min,max) {
          return Math.floor(Math.random()*(max-min+1)+min);
      }

      function hide(){ //hide the div
        document.getElementById('box').style.visibility = 'hidden';
      }

      function show(){//show the dive
        document.getElementById('box').style.visibility = 'visible';
      }
    </script>
  </head>
  <body>
    <div id="box"></div>
    <?php //generate the button that change the color of the div
      $color = array('Red','Blue','Green','White','Black','Anything');
      for ($i = 0; $i<count($color); $i++){
        echo '<button onclick="changeMe('.$i.')" class="button">Change to '.$color[$i].'!</button>';
      };
    ?>
    <br/>
    <button onclick="hide()" class="button">Hide Box!</button>
    <button onclick="show()" class="button">Show Box!</button><br/><br/>
  </body>
</html>
