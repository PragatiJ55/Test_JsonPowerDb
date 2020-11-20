$(document).ready(function(){
    $('.first_about_us_image').fadeIn(2500);
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
          $('.second_about_us_image').fadeIn(2500);
          
          
        }
        if ($(this).scrollTop() > 100) {
            $('div.design_awards img').fadeIn(2500);
            $('div.media_features img').fadeIn(2500);
        }
      });
});