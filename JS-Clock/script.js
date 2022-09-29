const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

setInterval(setDate, 1000)
setDate();

function setDate(){
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegress = ((seconds/60)*360) +90;
  secondHand.style.transform = `rotate(${secondsDegress}deg)`

  const mins = now.getMinutes();
  const minsDegress = ((mins / 60) * 360) + ((seconds / 60) * 6)+ 90;
  minHand.style.transform = `rotate(${minsDegress}deg)`

  const hour = now.getHours();
  const hourDegress = ((hour / 12) * 360)+((mins / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegress}deg)`
}
