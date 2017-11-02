$(document).ready(function() {
      $('#slideshow').slick();

      $(".image-wrapper").click(function() {
            $("#slideshowWrapper").css("opacity", "0");

            $("#slideshow").slick("unslick");

            $("#slideshowWrapper").css("display", "block");

            $('#slideshow').slick();

            $("#slideshowWrapper").animate({
                  "opacity": "1"
            }, 500);

      });

      $("#closeIcon").click(function() {
            $("#slideshowWrapper").fadeOut(500);
      });
});