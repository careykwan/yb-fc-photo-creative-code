$(document).ready(function() {
      $('#slideshow').slick();

      $(".image-wrapper").click(function() {
            $("#slideshow").slick("unslick");

            $("#slideshowWrapper").css("display", "block");

            $('#slideshow').slick();

            $("#slideshowWrapper").animate({
                  "opacity": "1"
            }, 500);

      });

      $("#closeIcon").click(function() {
            $("#slideshowWrapper").css({
                  "opacity": "0"
            }, 500);

            setTimeout(function() {
                  $("#slideshowWrapper").hide()
            }, 500);
      });
});