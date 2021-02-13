const modeZen = 0;
const modeIdle = 1;

const dafaultSprite = "img/popcat-sprite.png";

var CHPOKS = 0;
var SFXCHPOK = new Audio("sfx/pop.mp3");
var MODE = modeZen;

var CURRENT_SPRITE = dafaultSprite;

function main(){
    window.setInterval(autoChpoker, 1000)
}

function autoChpoker() {
    if (MODE == modeIdle) {
        changeState();
    }
}

function setMode(newMode) {
    MODE = newMode;
}

function setSprite(sprite) {
    CURRENT_SPRITE = newSprite;
}

function changeState() {
    CHPOKS++
    document.getElementById("score").innerHTML = CHPOKS;
    SFXCHPOK.play();

    document.getElementById("chpoker").className = "close";
    setTimeout(() => { document.getElementById("chpoker").className = "open"; }, 125);
}
