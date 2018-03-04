/* Slick.js Slider implementation */
$(document).ready(function(){
    $('.gallery').slick({
    nextArrow: '',
    prevArrow: '',
    appendArrows: '.gallery',
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  });
});