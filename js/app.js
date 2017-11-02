$(document).ready(function() {
      $('#slideshow').slick({});

      $(".image-wrapper").click(function() {
            $("#slideshowWrapper").fadeIn(500);
      });

      $("#closeIcon").click(function() {
            $("#slideshowWrapper").fadeOut(500);
      });
});