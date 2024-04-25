let timer;
let minutes;
let seconds;
let secondsToCount;

let timerActive = false;

function setTime() {
    minutes = Number(prompt('How many minutes?'))
    seconds = Number(prompt('How many seconds?'))
    secondsToCount = getFullTime(minutes, seconds)
    document.getElementById('time').innerHTML = secondsToCount
}

function getFullTime(mins, secs) {
    let finalCountdown = (mins * 60) + secs
    return finalCountdown
}

function startOrStopTime() {
    if (timerActive == false) {
        timerActive = true
        document.getElementById('startButton').innerHTML = 'Stop time'
        timer = setInterval(function() {
            console.log(secondsToCount)
            document.getElementById('time').innerHTML = secondsToCount
            secondsToCount -= 1
            if (secondsToCount == -1) {
                stopTime()
            }
        }, 1000);
    } else {
        stopTime()
    }
}

function stopTime() {
    clearInterval(timer)
    console.log("Time stop")
    timerActive = false
    document.getElementById('startButton').innerHTML = 'Start time'
}