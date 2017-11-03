$(document).ready(function() {
      $('#slideshow').slick();

      $(".image-wrapper").click(function() {

            var $imageArray = $(".image-wrapper");

            for (i = 0; i < $imageArray.length; i++) {
                  if ($imageArray[i]) {
                        $($imageArray[i]).data("idx", i);
                  }
            }

            var index = $(this).data("idx");

            console.log(index);

            $("#slideshowWrapper").css("opacity", "0");

            $("#slideshow").slick("unslick");

            $("#slideshowWrapper").css("display", "block");

            $('#slideshow').slick({
                  initialSlide: index
            });

            $("#slideshowWrapper").animate({
                  "opacity": "1"
            }, 500);

            $(".image-collection").css({
                  "filter": "blur(15px)"
            }, 500);

      });

      $("#closeIcon").click(function() {
            $("#slideshowWrapper").fadeOut(500);
            $(".image-collection").css({
                  "filter": "blur(0px)"
            }, 500);
      });
});