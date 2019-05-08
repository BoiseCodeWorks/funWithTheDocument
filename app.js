
let userScore = {
    mark: 0,
    jake: 0,
    brooklyn: 0,
    porter: 0
}

function setName(name) {
    debugger
    document.getElementById('name').innerText = "Hello My Name Is " + name
    drawScore(name)
}

function drawScore(name) {
    debugger
    let template = `
    <h3>My Score is: ${userScore[name]}</h3>
    <button class="btn btn-info" onclick="addScore('${name}')">Add Score</button>
    <button class="btn btn-warning" onclick="decreaseScore('${name}')">Decrease Score</button>
    `
    document.getElementById('score').innerHTML = template
}

// drawScore()

function addScore(name) {
    debugger
    userScore[name]++
    drawScore(name)
}

function decreaseScore(name) {
    userScore[name]--
    drawScore(name)
}


















































function runWhenClick() {
    console.log("clicked")
    document.getElementById('name').innerText = "Hello My Name Is Mark"
}