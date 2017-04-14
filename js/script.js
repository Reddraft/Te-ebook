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
  ***    HEADER ANIMATIONS     **
  *******************************/

  // header animations
  $('.js-wp-animate-ebook').addClass('animated fadeInLeft');
  $('.js-wp-animate-logo').addClass('animated fadeInDown');
  $('.js-wp-animate-main-heading').addClass('animated fadeInDown');
  $('.js-wp-animate-hero-text').addClass('animated fadeInDown');
  $('.js-wp-animate-form').addClass('animated fadeInDown');
  $('.js-wp-animate-hero-h5').addClass('animated fadeInDown');
  $('.js-wp-animate-scroll').addClass('animated fadeInUp');
});

/******************************
*** INTRO SECTION ANIMATIONS **
*******************************/

$('.intro-section').waypoint(function() {
    $('.js-wp-animate-intro-heading').addClass('animated fadeInDown');
    $('.js-wp-animate-intro-text').addClass('animated fadeInUp');

}, {
  offset: '400px;'
});






/******************************
***    FOOTER ANIMATIONS     **
*******************************/
var inview = new Waypoint.Inview({
element: $('html, body')[0],

  entered: function(direction) {
    if (direction === 'down') {
      $('.js-wp-animate-secondary-logo').addClass('animated fadeInDown');
      $('.js-wp-animate-social-icons').addClass('animated fadeInUp');
      $('.js-wp-animate-small').addClass('animated fadeInUp');
    }
  }

});
