function changeHomeName() {
    let newName = prompt("Home team name: ")
    document.getElementById("homeTeam").innerHTML = newName
}

function changeAwayName() {
    let newName = prompt("Away team name: ")
    document.getElementById("awayTeam").innerHTML = newName
}