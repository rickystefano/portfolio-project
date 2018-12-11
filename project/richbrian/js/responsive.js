var isOpen = false;
var e = 0;
$(document).ready(function() {

  setHeaderHeight();

  $(window).resize(function(event) {
    setHeaderHeight();
      // if (window.innerWidth <= 720){
      //   $("#active").attr("href", "#");
      // }
      if (e > 0) {
        e = 0;
        if (!isOpen) {
          $("nav").children("a").css({
            "display" : "inline-block",
            "width" : "33.333%"
          });
        }
      }
  });

  if (window.innerWidth <= 720) {
    $("#active").attr("href", "#");
    $("#active").css("cursor", "pointer");


    $("nav").click(function(event) {
      console.log(isOpen);
      if (!isOpen) {
        $("#active").attr("onclick", "closeMenu()");
        $(this).children("a").css({
          "display" : "block",
          "width" : "100%"
        });
        isOpen = true;
        e++;
      } else {
        console.log("halo");
        $("#active").attr("onclick", "closeMenu()");
        isOpen = false;
      }
    });
  }
});

function setHeaderHeight(){
  var imageHeight = document.getElementsByTagName("figure")[0].children[0];
  var lineHeight  = imageHeight.offsetHeight + "px";
  if (window.innerWidth >= 360) {
    $("header").height(imageHeight.offsetHeight);
    $("h1").css("line-height", lineHeight);
  }
}

function closeMenu(){
    console.log(!isOpen);
    if (isOpen) {
      var hideLinks = document.getElementsByTagName("nav")[0].children;
      for (var i = 0; i < hideLinks.length; i++) {
        hideLinks[i].style.display = "none";
        console.log(hideLinks[i]);
      }
      document.getElementById("active").style.display = "block";
  }
}
