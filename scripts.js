const sfxChpok = new Audio("./sfx/pop.mp3");

var chpoks = 0;
var mode   = 0;

const mode_zen  = 0;
const mode_idle = 1;

setInterval(auto_chpoker, 1000);

function auto_chpoker() {
    if (mode == mode_idle) {
        changeImage();
    }
}

function switch_mode() {
    if (mode == mode_zen) {
        mode = mode_idle;
    } else {
        mode = mode_zen;
    }
}

function set_mode(new_mode) {
    mode = new_mode;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function changeImage() {
    sfxChpok.play();

    document.getElementById("imgClickAndChange").src = "./img/1.png";
    setTimeout(() => { document.getElementById("imgClickAndChange").src = "./img/0.png"; }, 100);

    document.getElementById("score").innerHTML = chpoks++;
}