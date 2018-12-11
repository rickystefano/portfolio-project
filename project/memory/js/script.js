$(document).ready(function() {
  var selectedCard = "";
  var chosenCard   = "";
  var score        = 100;
  var cheatOn      = false;

  //game begins, shuffle cards
  hideScore();
  var parent = $("#game");
  var divs = parent.children();
  while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1) [0]);
  }

  $(".start").click(function(){
    $(this).hide();
    $(".card").addClass("hidden").toggleClass('animated pulse');
    $(".start").addClass("hidden");
    $(".restart, .cheat, .auto").show();
    startGame();
    removeCurrentAnimationClass('pulse');
  });

  function startGame(){
    showScore();
    toggleCheat();
    $("#game").css('border-radius', '10px 10px 0 0');
    $(".auto").click(function() {
      $(".card").addClass('found').removeClass('hidden');
      finishGame();
    });
    $("#fail, .restart").click(function() {
      location.reload();
    });
    $(".card:not(.found)").click(function() {
      if (chosenCard == ""){
        chosenCard = $(this).attr("id");
        selectCard(this, false);
      } else {
        if (chosenCard == $(this).attr("id")) {
          resetCard();
        } else {
          if (selectedCard == "") {
            selectCard(this, false);
          } else {
            selectCard(this, true);
          }
        }
      }
    });
  }

  function resetCard(){
    $(".selected").removeClass("selected").removeClass("wrong");
    $("#status").removeClass();
    selectedCard = "";
    chosenCard = "";
    if ($(".found").length == 16) {
      finishGame()
    }
  }

  function selectCard(card, isChosen = false){
    var chosenImage = $(card).attr("class");
    $(card).toggleClass("selected");
    if (isChosen == false) {
      selectedCard = chosenImage;
    } else {
      if (selectedCard == chosenImage) {
        $(".selected").addClass("found").toggleClass('bounceIn');
        $(".selected").removeClass("hidden");
        removeCurrentAnimationClass('bounceIn');
        addScore();
      } else {
        $(".selected").addClass("wrong").toggleClass('wobble');
        removeCurrentAnimationClass('wobble');
        extractScore();
      }
      setTimeout(function(){
        resetCard();
      }, 300);
    }
  }

  function hideScore(){
    $("#scoreContainer").hide();
  }

  function showScore(){
    $("#scoreContainer").show();
    $("#score").html(score);
  }

  function addScore(){
    if (score != 100) {
      $("#score").fadeOut(100).fadeIn(100);
      score += 5;
      $("#score").html(score);
    }
  }

  function extractScore(){
    $("#score").fadeOut(100).fadeIn(100);
    score -= 10;
    $("#score").html(score);
    if (score == 0) {
      $("#fail").show();
      $("span").hide();
      hideScore();
    }
  }

  function toggleCheat(){
    $(".cheat").click(function() {
      if (cheatOn == false) {
        $(".card").addClass('cheatOn');
        cheatOn = true;
      } else {
        $(".card").removeClass('cheatOn');
        cheatOn = false;
      }
    });
  }

  function finishGame(){
    $(".finish").show();
    $(".restart").css('top', '90px');
    $(".cheat, .auto").hide();
    if (score >= 55) {
      $("#score").css('color', 'green');
      $("audio").attr('src', 'sound_finish.mp3').trigger('play');
    } else {
      $("#score").css('color', 'red');
      $("audio").attr('src', 'sound_failed.mp3').trigger('play');
    }
  }

  function removeCurrentAnimationClass(currentClass){
    setTimeout(function(){
      $(".card").removeClass(currentClass);
    }, 250);
  }

});
