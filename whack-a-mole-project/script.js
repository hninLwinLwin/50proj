const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function startGame(){
  scoreBoard.textContent =0
  timeUp = false
  score= 0
  peep()
  setTimeout(() => timeUp = true, 15000)
}

function peep() {
  const time = randomTime(500,1000);
  const hole = randomHole(holes);
  hole.classList.add('up')
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) {
      peep()
    }
  },time)
}

function randomTime(min, max){
  return Math.round(Math.random() * (max-min) +min)
}

function randomHole(holes){
  const index= Math.floor(Math.random() * holes.length)
  const hole = holes[index]

  if(hole=== lastHole) {
    return randomHole(holes)
  }
  lastHole = hole
  return hole;
}
moles.forEach(mole => mole.addEventListener('click', wack))

function wack(e){
  if(!e.isTrusted) return;
  score++
  this.parentNode.classList.remove('up')
  scoreBoard.textContent = score
}
