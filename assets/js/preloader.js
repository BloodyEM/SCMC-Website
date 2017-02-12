/**
 * Created by RAVE on 1/20/2017.
 */
//$(document).ready(function() {
setTimeout(function() {
    $("#load").fadeOut(500, function() {
        document.getElementById("makeinvisible").style.opacity = "1";
        $('body').addClass("loaded");
    });
}, 1000);
//});