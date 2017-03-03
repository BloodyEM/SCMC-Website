/**
 * Created by RAVE on 1/20/2017.
 */
jQuery(window).load(function() {
    $("#load").fadeOut(500, function() {
        $("#loader-wrapper").fadeOut(500, function() {
            $("#makeinvisible").fadeIn(500, function() {
                $('body').css("background-color", "white")
            });
        });
    });
});