/* Responsive Navigation */

$(document).ready(function() {
    $("#navToggle a").click(function(e){
        e.preventDefault();

        $("#navMenu").toggleClass("menuUp menuDown");
    });
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });