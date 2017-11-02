$(document).ready(function() {
      $('#slideshow').slick({
            lazyLoad: 'progressive'
      });

      $(".image-wrapper").click(function() {
            $("#slideshowWrapper").fadeIn(500);
      });

      $("#closeIcon").click(function() {
            $("#slideshowWrapper").fadeOut(500);
      });
});