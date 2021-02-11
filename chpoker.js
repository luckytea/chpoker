var CHPOKS = 0;
var AUTOMODE = 0;
var SFXCHPOK = new Audio("pop.mp3");

function autoChpoker() {
    if (AUTOMODE == 1) {
        changeCatState();
    }
}

function switchMode() {
    if (AUTOMODE == 0) {
        AUTOMODE = 1;
    } else {
        AUTOMODE = 0;
    }
}

function changeCatState() {
    CHPOKS++
    document.getElementById("score").innerHTML = CHPOKS;
    SFXCHPOK.play();

    document.getElementById("imgClickAndChange").src = "pop_cat_mouth_open.png";
    setTimeout(() => { document.getElementById("imgClickAndChange").src = "pop_cat_mouth_closed.png"; }, 100);
}

function main(){
    setInterval(autoChpoker, 1000);
}
