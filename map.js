window.onload = init;
function init() {
    var map = document.getElementById("map");
    map.onmousemove = showCoords;
}
function showCoords(eventObj) {
    var map = document.getElementById("coords");
    var X = eventObj.clientX;
    var Y = eventObj.clientY;

    map.innerHTML = "Map coordinates: " + X + ", " + Y;

}