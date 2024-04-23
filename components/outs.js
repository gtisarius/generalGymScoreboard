function getOuts(isHomeTeam) {
    if (isHomeTeam == true) {
        return document.getElementById(homeOuts).innerHTML
    } else {
        return document.getElementById(awayOuts).innerHTML
    }
}

function updateOuts(isHomeTeam, outs) {
    if (isHomeTeam == true) {
        let currentOuts = Number(getOuts(true))
        let newOuts = currentOuts + outs
        document.getElementById(homeOuts).innerHTML = newOuts
    } else {
        let currentOuts = Number(getOuts(false))
        let newOuts = currentOuts + outs
        document.getElementById(awayOuts).innerHTML = newOuts
    }
}