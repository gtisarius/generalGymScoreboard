let myVar;
//var timer = 4;

function startTime(timer) {
    myVar = setInterval(function() {
        console.log(timer)
        timer -= 1
        if (timer == -1) {
            clearInterval(myVar)
            console.log("Time stop")
        }
    }, 1000);
}

startTime(5)