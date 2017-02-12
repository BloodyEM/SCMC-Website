/**
 * Created by RAVE on 1/20/2017.
 */
$(window).load(function() {
    $("#load").fadeOut(500, function() {
        document.getElementById("makeinvisible").style.opacity = "1";
        $('body').addClass("loaded");
    });
});