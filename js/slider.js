/* Slick.js Slider implementation */
$(document).ready(function(){
    $('.responsive').slick({
    nextArrow: '',
    prevArrow: '',
    appendArrows: '.responsive',
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          appendArrows: ''
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          appendArrows: ''
        }
      }
    ]
  });
  });