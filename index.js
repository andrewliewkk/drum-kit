var buttons = document.querySelectorAll(".drum");


for (const button of buttons) {
    button.addEventListener("click", play);
}

function play() {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
}