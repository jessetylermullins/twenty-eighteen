/* Slick.js Slider implementation */
$(document).ready(function(){
  $('.slider').on('init', function() {
    // check to see if there are one or less slides
    if (!($('.slider .slick-slide').length > 1)) {
      // remove dots
      $('.slick-dots').hide();
    };
  });
  
  $('.gallery').slick({
  arrows: true,
  nextArrow: '',
  prevArrow: '',
  appendArrows: '.slick-dots',
  dots: true,
  appendDots: '.gallery',
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
});
});