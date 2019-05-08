
let userScore = {
    mark: 0,
    jake: 0,
    brooklyn: 0,
    porter: 0,
    wizbang: 100
}

function setName(name, other) {
    document.getElementById('name').innerText = 'Hello, I have a name it\'s ' + name
    drawScore(name)
}

function drawScore(name) {
    let template = `
    <h3>My Score is: ${userScore[name]}</h3>
    <button class="btn btn-info" onclick="addScore('${name}')">Add Score</button>
    <button class="btn btn-warning" onclick="decreaseScore('${name}')">Decrease Score</button>
    `
    document.getElementById('score').innerHTML = template
}

function addScore(name) {
    userScore[name]++
    drawScore(name)
}

function decreaseScore(name) {
    userScore[name]--
    drawScore(name)
}

function resetScores() {
    for (let key in userScore) {
        userScore[key] = 0
    }
    document.getElementById('score').innerHTML = ''
    document.getElementById('name').innerHTML = 'Hello, I have a name it\'s _______'
}













































function runWhenClick() {
    console.log("clicked")
    document.getElementById('name').innerText = "Hello My Name Is Mark"
}