$(document).ready(function() {

    $('.examples_slider').slick({
      arrows: true,
      dots: true,
      slidesToShow: 1,
      speed: 800,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1800
    });

    $(document).on('click','.show-thanks', function() {
      $('#thanks').show(); 
      $('body').addClass('fixed'); 
        return false;
      });
      $(document).on('click','.show-form', function() {
        $('#form').show(); 
        $('body').addClass('fixed'); 
          return false;
        });
        $(document).on('click','.show-anketa-dealer', function() {
          $('#anketa-d').show();  
          $('body').addClass('fixed');
            return false;
          });
          $(document).on('click','.show-anketa-customer', function() {
            $('#anketa-c').show(); 
            $('body').addClass('fixed'); 
              return false;
            });

      $(document).on('click','.popup_close, .popup_overlay', function() {
        $('.popup_wrapper').hide();
        $('body').removeClass('fixed');  
          return false;
        });

});