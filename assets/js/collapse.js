/**
 * Created by RAVE on 1/20/2017.
 */
function teamToggle() {
    $("#team").slideToggle('slow');
}
function v1() {
    $("#versiondownloads1").slideToggle("slow");
    $("#versiondownloads2").slideUp("slow");
	$("#versiondownloads3").slideUp("slow");
}
function v2() {
    $("#versiondownloads2").slideToggle("slow");
    $("#versiondownloads1").slideUp("slow");
	$("#versiondownloads3").slideUp("slow");
}
function v3() {
    $("#versiondownloads3").slideToggle("slow");
    $("#versiondownloads1").slideUp("slow");
	$("#versiondownloads2").slideUp("slow");
}
function v4() {
    $("#developerstab").slideToggle("slow");
}
function wiki_collapse_all() {
    $("#wiki_mobs").slideUp("slow");
    $("#wiki_items").slideUp("slow");
    $("#wiki_biomes").slideUp("slow");
    $("#wiki_recipes").slideUp("slow");
    $("#wiki_bosses").slideUp("slow");
    $("#wiki_blocks").slideUp("slow");
    $("#wiki_dimensions").slideUp("slow");
}
function wiki_mobs() {
    wiki_collapse_all();
    $("#wiki_mobs").slideToggle("slow");
}
function wiki_mobs_protoss() {
    $("#wiki_mobs_protoss").slideToggle("slow");
}
function wiki_items() {
    wiki_collapse_all();
    $("#wiki_items").slideToggle("slow");
}
function wiki_biomes() {
    wiki_collapse_all();
    $("#wiki_biomes").slideToggle("slow");
}
function wiki_recipes() {
    wiki_collapse_all();
    $("#wiki_recipes").slideToggle("slow");
}
function wiki_bosses() {
    wiki_collapse_all();
    $("#wiki_bosses").slideToggle("slow");
}
function wiki_blocks() {
    wiki_collapse_all();
    $("#wiki_blocks").slideToggle("slow");
}
function wiki_dimensions() {
    wiki_collapse_all();
    $("#wiki_dimensions").slideToggle("slow");
}