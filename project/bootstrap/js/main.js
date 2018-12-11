$(document).ready(function(){
    var bigThumbnail = document.getElementById("big-thumbnail");

    $(document).on("click", ".item-cards", function(){
        window.location.href = "detail.html";
    });
    $(document).on("click", ".detail-thumbnails", function () {
        bigThumbnail.setAttribute('src', this.src);
        $(".detail-thumbnails").removeClass("border-on");
        $(this).addClass("border-on");
    });

    $("#big-thumbnail").blowup({
        "width": 200,
        "height": 200,
        "scale": 5,
        "border": "6px solid #709b1d"
    });
});