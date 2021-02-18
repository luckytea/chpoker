const modeZen = 0;
const modeIdle = 1;

const sfxPop  = "sfx/pop.mp3";
const sfxWhat = "sfx/what.wav";
const sfxNya  = "sfx/nya.mp3";
var sfxCurrent = "";
var sfxVolume = 1;

const bonusModificator = 10;

const spriteCatOpen = "cat_open";
const spriteCatClose = "cat_close";

const spriteDemonOpen = "demon_open";
const spriteDemonClose = "demon_close";

var CHPOKS = 0;
var MODE = modeZen;

const MinuteInSeconds = 60;
const defaultBeatsPerMinute = 60;
const defaultChpokIntervalMilseconds = 1000;
const OneSecondIntervalInMilseconds = 1000;
var chpokInterval = (MinuteInSeconds/defaultBeatsPerMinute) * OneSecondIntervalInMilseconds;

var styleOpen  = spriteCatOpen;
var styleClose = spriteCatClose;

function main(){
    setSprite('popcat');
    setSFX(sfxPop);

    // document.getElementById("metronome-bpm").innerHTML = defaultBeatsPerMinute;

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

function toggleMode() {
    var checked = document.getElementById("toggle-button").checked;

    if (!checked) {
        MODE = modeIdle;
    } else {
        MODE = modeZen;
    }
}

function toggleMute() {
    var checked = document.getElementById("toggle-button-mute").checked;

    if (!checked) {
        sfxVolume = 1;
    } else {
        sfxVolume = 0;
    }
}

function setChpokInterval(interval) {
    _interval = (MinuteInSeconds/interval) * OneSecondIntervalInMilseconds

    chpokInterval = _interval;

    document.getElementById("metronome-bpm").innerHTML = interval;
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

function setSFX(sfx) {
    sfxCurrent = sfx;
}

function changeState() {
    CHPOKS++

    if (CHPOKS%bonusModificator == 0) {
        document.getElementById("score").className = 'score_pop';
        setTimeout(() => { document.getElementById("score").className = 'score';}, 300);
    }

    document.getElementById("score").innerHTML = CHPOKS;

    playSfx(sfxCurrent);

    document.getElementById("chpoker").className = styleClose;
    setTimeout(() => { document.getElementById("chpoker").className = styleOpen;}, 125);
}

function playSfx(sfx) {
    var sfx = new Audio(sfx);

    sfx.volume = sfxVolume;
    sfx.play();

    delete sfx;
}