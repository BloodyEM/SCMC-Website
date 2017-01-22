/**
 * Created by RAVE on 1/20/2017.
 */
$(document).ready(function() {
    $("#load").fadeOut(500, function() {
        $("#makeinvisible").fadeIn(500, function() {
            $('body').css("background-color", "white")
        });
    });
});