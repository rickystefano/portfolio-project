$(document).ready(function() {
  //typer title
  typeText("#title");
  changeTags();

  //navigator
  var center = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  };

  //project href
  $(document).on("click", ".projects-item", function() {
    var target = this.dataset.target;
    window.open(target, "blank_").focus();
  });

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

  //tags
  $(document).on("click", ".tags", changeTags);
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
  $(e).html("_");
  $(e).show();
  var newText = "";
  function myLoop(i) {
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

function changeTags(begin = null) {
  const tags = begin == null ? "all" : $(this).data("tags");
  const cont = document.getElementById("projects-container");

  if (begin != null) {
    $(".tags").removeClass("active");
    $(this).addClass("active");
  }

  $.ajax({
    url: "./dash/function.php",
    method: "POST",
    data: {
      action: "project",
      tags: tags
    }
  }).done(function(res) {
    cont.innerHTML = res;
  });
}
