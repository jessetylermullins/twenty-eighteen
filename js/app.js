/* Responsive Navigation */

$(document).ready(function() {
    $("#navToggle a").click(function(e){
        e.preventDefault();

        $("#navMenu").toggleClass("menuUp menuDown");
    });
});