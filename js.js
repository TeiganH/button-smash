const upArrow = document.querySelector('.up-arrow')
const leftArrow = document.querySelector('.left-arrow')
const downArrow = document.querySelector('.down-arrow')
const rightArrow = document.querySelector('.right-arrow')
let scoreDiv = document.querySelector('.score')
let total = 0
let pressed = 0

let score = function () {
    if (total < 30) {
        total += 10
        scoreDiv.textContent = total
        return total
    } else { 
        scoreDiv.textContent = total
        confirm("You win! Play again?")
        location.reload()
    }
}

const isArrowUp = function() {
    document.body.addEventListener('keydown', (event) => {
        const arrowKey = event.keyCode
        if (arrowKey === 38) {
            pressed = 38
            isUpArrowPressed()
            score()
        } else if (arrowKey !== 38 || arrowKey !== 37 || arrowKey !== 39 || arrowKey !== 40){
            confirm("You lose. Want to play again?\n (press the arrow keys)")
            location.reload()
        }
    })
}    
    

const isArrowDown = function() {
    document.body.addEventListener('keydown', (event) => {
        const arrowKey = event.keyCode
        if (arrowKey === 40) {
            pressed = 40
            isDownArrowPressed()
            score()
        } else if (arrowKey !== 38 || arrowKey !== 37 || arrowKey !== 39 || arrowKey !== 40){
            confirm("You lose. Want to play again?\n (press the arrow keys)")
            location.reload()
        }
    })
}    

const isArrowLeft = function() {
    document.body.addEventListener('keydown', (event) => {
        const arrowKey = event.keyCode
        if (arrowKey === 37) {
            pressed = 37
            isLeftArrowPressed()
            score()
        } else if (arrowKey !== 38 || arrowKey !== 37 || arrowKey !== 39 || arrowKey !== 40){
            confirm("You lose. Want to play again?\n (press the arrow keys)")
            location.reload()
        }
    })
}    

const isArrowRight = function() {
    document.body.addEventListener('keydown', (event) => {
        const arrowKey = event.keyCode
        if (arrowKey === 39) {
            pressed = 39
            isRightArrowPressed()
            score()
        } else if (arrowKey !== 38 || arrowKey !== 37 || arrowKey !== 39 || arrowKey !== 40){
            confirm("You lose. Want to play again?\n (press the arrow keys)")
            location.reload()
        }
    })
}    

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


const isUpArrowPressed = function() {
    if (pressed == 38) {
    }
}

const isLeftArrowPressed = function() {
    if (pressed == 37) {
    }
}

const isRightArrowPressed = function() {
    if (pressed == 39) {
    }
}

const isDownArrowPressed = function() {
    if (pressed == 40) {
    }
}

const loser = function() {
    if (arrowKey !== 38 || arrowKey !== 37 || arrowKey !== 39 || arrowKey !== 40){
        confirm("You lose. Want to play again?\n (press the arrow keys)")
        location.reload()
    }
}

const beginGame = function() {
    timeoutArrowUp()
    timeoutArrowDown()
    timeoutArrowLeft()
    timeoutArrowRight()
    isArrowUp()
    isArrowLeft()
    isArrowDown()
    isArrowRight()
    isUpArrowPressed()
    isLeftArrowPressed()
    isRightArrowPressed()
    isDownArrowPressed()
}
beginGame()
