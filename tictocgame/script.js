const playerXClass= 'x'
const playerOClass= 'circle'
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const cellElement = document.querySelectorAll('.cell')
const boardElement = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessagText = document.getElementById('winningMessagText')
let isPlayer_O_Turn = false

starGame()

function starGame(){
  isPlayer_O_Turn = false
  cellElement.forEach(cell =>{
    cell.classList.remove(playerXClass)
    cell.classList.remove(playerOClass)
    cell.removeEventListener('click', handleCellClick)
    cell.addEventListener('click', handleCellClick,{once: true})
  })
  setBoardHoverClass()
  winningMessageElement.classList.remove('show')
}

function handleCellClick(e){
  const cell = e.target
  const currentClass = isPlayer_O_Turn ? playerOClass : playerXClass
  console.log(currentClass)
  placeMark(cell, currentClass)
  if(checkWin(currentClass)){
    endGame(false)
  }else if(isDraw()){
    endGame(true)
  }else{
    swapTurns()
    setBoardHoverClass()
  }
}

function endGame(draw){
  if(draw){
    winningMessagText.innerText = "It's a draw!"
  }else {
    winningMessagText.innerText = `Player with ${isPlayer_O_Turn? "0's" : "x's"} wins!`
  }
  winningMessageElement.classList.add('show')
}

function isDraw(){
  return [...cellElement].every(cell=>{
    return cell.classList.contains(playerXClass) ||
 cell.classList.contains(playerOClass)})
}

function placeMark(cell,currentClass){
  cell.classList.add(currentClass)
}

function swapTurns(){
  console.log(isPlayer_O_Turn)
  isPlayer_O_Turn = !isPlayer_O_Turn
}

function setBoardHoverClass(){
  console.log(isPlayer_O_Turn)
  boardElement.classList.remove(playerXClass)
  boardElement.classList.remove(playerOClass)
  if(isPlayer_O_Turn) {
    boardElement.classList.add(playerOClass)
  }else{
    boardElement.classList.add(playerXClass)
  }
}

function checkWin(currentClass){
  return winningCombinations.some(combination =>{
    return combination.every(index =>{
      return cellElement[index].classList.contains(currentClass)
    })
  })
}

restartButton.addEventListener('click', starGame)
