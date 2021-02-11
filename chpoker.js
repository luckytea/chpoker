const modeZen = 0;
const modeIdle = 1;

var CHPOKS = 0;
var SFXCHPOK = new Audio("pop.mp3");
var MODE = modeZen;

function autoChpoker() {
    if (MODE == modeIdle) {
        changeCatState();
    }
}

function setMode(newMode) {
    MODE = newMode;
}

function changeCatState() {
    CHPOKS++
    document.getElementById("score").innerHTML = CHPOKS;
    SFXCHPOK.play();

    document.getElementById("imgClickAndChange").src = "img/pop_cat_mouth_open.png";
    setTimeout(() => { document.getElementById("imgClickAndChange").src = "img/pop_cat_mouth_closed.png"; }, 125);
}

function main(){
    window.setInterval(autoChpoker, 1000)
}
