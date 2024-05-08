$(document).ready( function() {

    $(document).on('click', '.btn-add, .btn-minus', function() {

      var counterElement = $(this).closest('.counter-plus-minus').find('#cart-counter');
      var cartCounter = parseInt(counterElement.text());

      if ($(this).hasClass('btn-add')) {
          cartCounter++;
      } else if ($(this).hasClass('btn-minus')) {
          if ($(this).hasClass('cart_item'))
          {
            if (cartCounter === 1) {
                $(this).closest('.counter-plus-minus').find('.btn-minus').css('cursor', 'not-allowed');
              } else {
                $(this).closest('.counter-plus-minus').find('.btn-minus').css('cursor', 'pointer');
                cartCounter = Math.max(1, cartCounter - 1);
              }
          }
          else {
            if (cartCounter === 0) {
              $(this).closest('.counter-plus-minus').find('.btn-minus').css('cursor', 'not-allowed');
            } else {
              $(this).closest('.counter-plus-minus').find('.btn-minus').css('cursor', 'pointer');
              cartCounter = Math.max(0, cartCounter - 1);
            }
          }
      }
      counterElement.text(cartCounter);
  });
  
    $(".heart").click(function() {
      $(this).toggleClass("heart heart-des");
    });

    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:5,
              nav:true,
              loop:false
          }
      }
  })
    
  });
  