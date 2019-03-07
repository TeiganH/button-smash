const score = document.querySelector('aside > div')
const upArrow = document.querySelector('.up-arrow')
const leftArrow = document.querySelector('.left-arrow')
const downArrow = document.querySelector('.down-arrow')
const rightArrow = document.querySelector('.right-arrow')

const checkArrowKey = function() {
    document.body.addEventListener('keydown', (event) => {
        const arrowKey = event.keyCode
        if (arrowKey === 38) {
            console.log('clicked', 'upArrow')
        }else if (arrowKey === 37){
            console.log('clicked', 'leftArrow')
        } else if (arrowKey === 40) {
            console.log('clicked', 'downArrow')
        } else if (arrowKey === 39) {
            console.log('clicked', 'rightArrow')
        } else { 
            console.log('nope')
        }
    })
}

const colorUpArrowGreen = function() {
    upArrow.style.color = 'green'
}

const colorUpArrowWhite = function() {
    upArrow.style.color = 'white'
}

const colorDownArrowGreen = function() {
    downArrow.style.color = 'green'
}

const colorDownArrowWhite = function() {
    downArrow.style.color = 'white'
}

const timeoutArrowUp = function() {
    setTimeout(colorUpArrowGreen, 500)
    setTimeout(colorUpArrowWhite, 1500)
}

const timeoutArrowDown = function() {
    setTimeout(colorDownArrowGreen, 2000)
    setTimeout(colorDownArrowWhite, 3000)
}

const beginGame = function() {
    timeoutArrowUp()
    timeoutArrowDown()
    checkArrowKey()
}
beginGame()


