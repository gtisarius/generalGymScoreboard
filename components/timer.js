let timer;
let minutes;
let seconds;
let secondsToCount;

let timerActive = false;

function setTime() {
    minutes = Number(document.getElementById('minuteSelect').value)
    seconds = Number(document.getElementById('secondSelect').value)
    secondsToCount = getFullTime(minutes, seconds)
    document.getElementById('time').innerHTML = minsecFormat(secondsToCount)
}

function getFullTime(mins, secs) {
    let finalCountdown = (mins * 60) + secs
    return finalCountdown
}

function startOrStopTime() {
    if (timerActive == false) {
        startTime()
    } else {
        stopTime()
    }
}

function startTime() {
    timerActive = true
    document.getElementById('startButton').innerHTML = 'Stop time'
    timer = setInterval(function() {
        console.log(secondsToCount)
        document.getElementById('time').innerHTML = minsecFormat(secondsToCount)
        secondsToCount -= 1
        if (secondsToCount == -1) {
            stopTime()
        }
    }, 1000);
}

function stopTime() {
    clearInterval(timer)
    console.log("Time stop")
    timerActive = false
    document.getElementById('startButton').innerHTML = 'Start time'
}

function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}

function minsecFormat(totalSeconds) {
    let minutesLeft = Math.floor(totalSeconds / 60)
    let secondsLeft = totalSeconds % 60;
    return `${minutesLeft}:${pad(secondsLeft)}`
}