const calculate = document.getElementById('calculate')
const totalTip = document.getElementById('totalTip')
const each = document.getElementById('each')
const tip = document.getElementById('tip')
const billAmount = document.getElementById('billAmount');
const serviceQuality = document.getElementById('serviceQuality');
const numPeople = document.getElementById('totalPeople');


totalTip.style.display='none'
each.style.display = 'none'

calculate.addEventListener('click', calculateTip)

function calculateTip(){
  if(billAmount.value === '' || serviceQuality.value == 0){
    window.alert('Please enter some values to get this program running!!!')
    return;
  }
  if(numPeople.value ==='' ||  numPeople.value <=1){
    numPeople =1;
    each.style.display = 'none'
  }else {
    each.style.display = 'block'
  }
  let total = (billAmount.value* serviceQuality.value)/numPeople.value
  total = Math.round(total*100)/100;
  total = total.toFixed(2);

  totalTip.style.display = 'block'
  tip.innerHTML = total;
}
