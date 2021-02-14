const modeZen = 0;
const modeIdle = 1;

const bonusModificator = 10;

const spriteCatOpen = "cat_open";
const spriteCatClose = "cat_close";

const spriteDemonOpen = "demon_open";
const spriteDemonClose = "demon_close";

var CHPOKS = 0;
var MODE = modeZen;


const defaultChpokInterval = 1000;
const minInchpokInterval = 100;
const maxInchpokInterval = 3000;
var chpokInterval = defaultChpokInterval;

var styleOpen  = spriteCatOpen;
var styleClose = spriteCatClose;

function main(){
    setSprite('popcat');
    document.getElementById("metronome-bpm").innerHTML = chpokInterval;

    var autoChpoker = function() {
        if (MODE == modeIdle) {
            changeState();
        }

        setTimeout(autoChpoker, chpokInterval);
    }

    setTimeout(autoChpoker, chpokInterval);
}

function setMode(newMode) {
    MODE = newMode;
}

function setChpokInterval(interval) {
    if (interval > maxInchpokInterval) {
        interval = defaultChpokInterval;
    }

    if (interval < minInchpokInterval) {
        interval = defaultChpokInterval;
    }

    chpokInterval = interval;

    document.getElementById("metronome-bpm").innerHTML = chpokInterval;
}

function setSprite(sprite) {
    if (sprite == "popcat") {
        styleOpen  = spriteCatOpen;
        styleClose = spriteCatClose;
    } else {
        styleOpen  = spriteDemonOpen;
        styleClose = spriteDemonClose;
    }

    document.getElementById("chpoker").className = styleOpen;
}

function changeState() {
    CHPOKS++

    if (CHPOKS%bonusModificator == 0) {
        document.getElementById("score").className = 'score_pop';
        setTimeout(() => { document.getElementById("score").className = 'score';}, 300);
    }

    document.getElementById("score").innerHTML = CHPOKS;
    
    playSfx("sfx/pop.mp3");

    document.getElementById("chpoker").className = styleClose;
    setTimeout(() => { document.getElementById("chpoker").className = styleOpen;}, 125);
}

function playSfx(sfx) {
    var sfx = new Audio(sfx);
    sfx.play();
    delete  sfx;
}