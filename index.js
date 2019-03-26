const upArrow = document.querySelector('.up-arrow')
const leftArrow = document.querySelector('.left-arrow')
const downArrow = document.querySelector('.down-arrow')
const rightArrow = document.querySelector('.right-arrow')
let scoreDiv = document.querySelector('.score')
let total = 0

let score = function () {
    console.log(total)
        total += 10
        scoreDiv.textContent = total
        if (total == 40) {
        confirm("You win! Play again?")
        location.reload()
    }
}

const noArrow = function(){
        confirm("You lose. Want to play again?\n (press the arrow keys)")
        location.reload()
}

document.body.addEventListener('keydown', event => {
const arrowKey = event.keyCode
if (arrowKey === 40) {
    score()
}
else if (arrowKey === 39) {
    score()
}
else if (arrowKey === 37) {
    score()
}
else if (arrowKey === 38) {
    score()
}
else {
    noArrow()
}

})

const colorUpArrowPurple = function() {
    upArrow.style.color = 'purple'
}

const colorUpArrowWhite = function() {
    upArrow.style.color = 'white'
}

const colorDownArrowPurple = function() {
    downArrow.style.color = 'purple'
}

const colorDownArrowWhite = function() {
    downArrow.style.color = 'white'
}

const colorLeftArrowPurple = function() {
    leftArrow.style.color = 'purple'
}

const colorLeftArrowWhite = function() {
    leftArrow.style.color = 'white'
}

const colorRightArrowPurple = function() {
    rightArrow.style.color = 'purple'
}

const colorRightArrowWhite = function() {
    rightArrow.style.color = 'white'
}

const timeoutArrowUp = function() {
    setTimeout(colorUpArrowPurple, 500)
    setTimeout(colorUpArrowWhite, 1000)
}

const timeoutArrowDown = function() {
    setTimeout(colorDownArrowPurple, 1500)
    setTimeout(colorDownArrowWhite, 2000)
}

const timeoutArrowLeft = function() {
    setTimeout(colorLeftArrowPurple, 2500)
    setTimeout(colorLeftArrowWhite, 3000)
}

const timeoutArrowRight = function() {
    setTimeout(colorRightArrowPurple, 3500)
    setTimeout(colorRightArrowWhite, 4000)
}

const beginGame = function() {
    timeoutArrowUp()
    timeoutArrowDown()
    timeoutArrowLeft()
    timeoutArrowRight()
}
beginGame()
