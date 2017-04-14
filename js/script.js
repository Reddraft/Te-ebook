$(document).ready(function() {

  /******************************
  ***    CLEAR INPUT  AFTER SUBMIT **
  *******************************/

  var $input = $(':input');
  var $btn = $('.btn-submit');

  $input.focus(function() {
    $(this).removeAttr('placeholder');
  })

  $input.blur(function() {
    $(this).val(' ');
    $(this).attr('placeholder', 'Enter Email' );
  })

  $btn.click(function() {
    $input.val(' ');
    $input.attr('placeholder', 'Enter Email' );
  });

  /******************************
  ***       ANIMATIONS         **
  *******************************/

  // header animations
  $('.js-wp-animate-logo').addClass('animated fadeInDown');
  $('.js-wp-animate-main-heading').addClass('animated fadeInDown');
  $('.js-wp-animate-hero-text').addClass('animated fadeInDown');
  $('.js-wp-animate-form').addClass('animated fadeInDown');
  $('.js-wp-animate-hero-h5').addClass('animated fadeInDown');
  $('.js-wp-animate-scroll').addClass('animated fadeInUp');
});
