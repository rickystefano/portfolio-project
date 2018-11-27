$(document).ready(function() {
  typeText("#title");
  var center = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  };
  $(document).on("click", ".navigator", function(e) {
    var targetData, pageTarget;
    var pageData = e.target.parentNode.dataset.page;
    var targetKey = this.className.split(" ");

    if (pageData == "center") {
      targetData = targetKey[targetKey.length - 1];
      pageTarget = document.querySelector(
        "[data-page=" + eval(pageData)[targetData] + "]"
      );
    } else {
      targetData = "center";
      pageTarget = this.parentNode;
    }
    slide(pageData, targetData, pageTarget);
  });
});
function slide(ori, tar, id) {
  var time = 800;
  if (ori == "center") {
    switch (tar) {
      case "top":
        $(id)
          .stop()
          .animate(
            {
              top: "-300%"
            },
            time
          );
        break;
      case "right":
        $(id)
          .stop()
          .animate(
            {
              left: "0%"
            },
            time
          );
        break;
      case "bottom":
        $(id)
          .stop()
          .animate(
            {
              top: "-100%"
            },
            time
          );
        break;
      case "left":
        $(id)
          .stop()
          .animate(
            {
              left: "0%"
            },
            time
          );
        break;
    }
  }

  if (tar == "center") {
    switch (ori) {
      case "top":
        $(id)
          .stop()
          .animate(
            {
              top: "-200%"
            },
            time
          );
        break;
      case "right":
        $(id)
          .stop()
          .animate(
            {
              left: "100%"
            },
            time
          );
        break;
      case "bottom":
        $(id)
          .stop()
          .animate(
            {
              top: "-200%"
            },
            time
          );
        break;
      case "left":
        $(id)
          .stop()
          .animate(
            {
              left: "-100%"
            },
            time
          );
        break;
    }
  }
}
function typeText(e) {
  $(e).hide();
  var text = $(e).html();
  console.log(text.length);
  $(e).html("_");
  $(e).show();
  var newText = "";
  function myLoop(i) {
    console.log(newText);
    setTimeout(function() {
      if (i == text.length) {
        $(e).html(newText + '<span class="blink">_</span>');
        return;
      }
      newText += text.charAt(i);
      $(e).html(newText + "_");
      if (++i) myLoop(i);
    }, 50);
  }
  myLoop(0);
}
