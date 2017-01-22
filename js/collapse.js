/**
 * Created by RAVE on 1/20/2017.
 */
function teamToggle() {
    $("#team").slideToggle('slow');
}
function v1() {
    $("#versiondownloads1").slideToggle("slow");
    $("#versiondownloads2").slideUp("slow");
}
function v2() {
    console.log("version not released yet!");
    $("#versiondownloads2").slideToggle("slow");
    $("#versiondownloads1").slideUp("slow");
}