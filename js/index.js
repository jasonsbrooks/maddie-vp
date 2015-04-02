$(document).ready(function() { 
  var scroll_start = 0;
  // var startchange = $('.heroText1');
  // var offset = startchange.offset();
  var offset = $(window).height() / 3;
  $(document).scroll(function() { 
     scroll_start = $(this).scrollTop();
     if(scroll_start > offset) {
         $('.navbar').addClass('scrolled');
         // $('#logo').attr('src', 'static/img/logo-blk.png');
      } else {
         $('.navbar').removeClass('scrolled');
         // $('#logo').attr('src', 'static/img/logo.png');
      }
  });

  $(document).on('click','.scrollToDiv', function(event) {
      event.preventDefault();
      var target = "#" + this.getAttribute('data-target');
      $('html, body').animate({
          scrollTop: $(target).offset().top - 50
      }, 1000);
  });

  $('#buttons').click(function() {
    window.open('https://www.facebook.com/maddieforvp', '_blank'); 
  });

  $('.platform-point').click(function(){
     $(this).next().slideToggle(function() {
      jQuery(window).trigger('resize').trigger('scroll');
     });
   });

  $('.platform-section').hide();

});