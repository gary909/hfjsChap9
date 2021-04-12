
window.onload = init;
function init() {
    // var image = document.getElementById("zero");
    // image.onclick = showAnswer;
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }
}

function showAnswer(eventObj) {
    // var image = document.getElementById("zero");
    // image.src = "/media/zero.jpg";
    var image = eventObj.target;

    var name = image.id;
    name = name + ".jpg";
    image.src = name;
}