
window.onload = init;
function init() {
    // var image = document.getElementById("zero");
    // image.onclick = showAnswer;
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        //images[i].onclick = showAnswer;
        images[i].onmouseover = showAnswer; // Hover mouse to reveal image
        images[i].onmouseout = reblur; // Hover mouse to reveal image
    }
}

function showAnswer(eventObj) {
    // var image = document.getElementById("zero");
    // image.src = "/media/zero.jpg";
    var image = eventObj.target;

    var name = image.id;
    name = name + ".jpg";
    image.src = name;
    setTimeout(reblur, 2000, image);
}

function reblur(eventObj) {
    var image = eventObj.target;
    var name = image.id;
    name = name + "blur.jpg";
    image.src = name;
}