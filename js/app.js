/* Responsive Navigation */

$(document).ready(function() {
    $("#navToggle a").click(function(e){
        e.preventDefault();

        $("#navMenu").toggleClass("menuUp").slideToggle(450);
    });
});

/* Portfolio filter through an on click category selection */

$(function() {
  let selectedClass = "";
  $(".filter-category").click(function() {
    selectedClass = $(this).attr("data-rel");
    $(this)
      .siblings()
      .removeClass("portfolio-selected");
    $(this).addClass("portfolio-selected");
    $("#portfolio").fadeTo(300, 0);
    $("#portfolio div")
      .not("." + selectedClass)
      .fadeOut();
    setTimeout(function() {
      $("." + selectedClass).fadeIn();
      $("#portfolio").fadeTo(300, 1);
    }, 600);
  });
});

/* particlesJS */

particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#333333"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#cccccc"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 4,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 115,
        "color": "#aaaaaa",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "bounce",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 0.2
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });