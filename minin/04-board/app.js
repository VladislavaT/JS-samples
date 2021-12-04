const board = document.querySelector('#board')
const SQ_NUM = 560
const colors = ['#475B95', '#B1C1D3', '#ECEDEC', '#232D4A', '#42263F']

for (let i = 0; i <SQ_NUM; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColour(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    
    board.append(square)
}

function setColour(square) {
    const color = getRandomColor()
    square.style.backgroundColor = color
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(square) {
    square.style.backgroundColor = '#111';
    square.style.boxShadow = `0 0 2px rgb(46, 46, 46)`
}

function getRandomColor() {
  const index =  Math.floor(Math.random() * colors.length)
    return colors[index]
}