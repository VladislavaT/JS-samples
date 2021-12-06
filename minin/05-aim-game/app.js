const startBtn = document.getElementById('start');
const screens = document.querySelectorAll('.screen')
const timeList = document.getElementById('time-list')
const timeEl = document.getElementById('time')
const board = document.getElementById('board')

const colors = ['#9C19E0', '#FF5DA2', '#99DDCC', '#94B3FD', '#B983FF']

let time = 0
let score = 0

let setTime = (val) => timeEl.innerHTML = `00:${val}`
let getRandNum = (min, max) =>  Math.round(Math.random() * (max - min) + min)

board.addEventListener('click', event => {
    if(event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandCircle()
    }
})

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')

})

timeList.addEventListener('click', event => {
    if(event.target.classList.contains('time-btn')) {
       time = parseInt(event.target.getAttribute('data-time'))
       screens[1].classList.add('up')
       startGame()
    }
})


function startGame() {
   setInterval(decTime, 1000)
   createRandCircle()
   setTime(time)
}

 

function decTime() {
    if(time === 0) {
        finishGame()
    } else {
        let current = --time
        if(current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}



function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Score: <span class='primary'>${score}</span></h1>`
}

function createRandCircle() {
    const circle = document.createElement('div')
    const size = getRandNum(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandNum(0, (width-10))
    const y = getRandNum(0, (height-10))
    

    circle.classList.add('circle')
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    const color = getRandomColor()
    
    circle.style.backgroundColor = color
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    board.append(circle)
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

