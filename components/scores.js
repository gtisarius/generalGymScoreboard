function getScore(isHomeTeam) {
    if (isHomeTeam == true) {
        return document.getElementById('homeScore').innerHTML
    } else {
        return document.getElementById('awayScore').innerHTML
    }
}

function updateScore(isHomeTeam, score) {
    if (isHomeTeam == true) {
        let currentScore = Number(getScore(true))
        let newScore = currentScore + score
        document.getElementById('homeScore').innerHTML = newScore
    } else {
        let currentScore = Number(getScore(false))
        let newScore = currentScore + score
        document.getElementById('awayScore').innerHTML = newScore 
    }
}