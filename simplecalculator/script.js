const answer = document.getElementById('answer');
const buttons = document.querySelectorAll('button');

let buttonText = ''
answer.readOnly = true
let screen = answer
let screenValue = ""

buttons.forEach(item =>{
  console.log(item)
  item.addEventListener('click', (e)=>{
    buttonText = e.target.innerText;
    if(buttonText == 'X'){
      buttonText = '*'
      screenValue += buttonText;
      screen.value = screenValue;
    }else if(buttonText=='C'){
      screenValue=''
      screen.value = screenValue
    }else if (buttonText =='='){
      checkForBracketMulti()
    }else {
      screenValue +=buttonText
      screen.value = screenValue
    }
    console.log(screenValue)
  })
})

document.addEventListener('keydown', function (event){
  console.log(event.which)
  if(event.shiftKey == 57){
    event.key='('
  }else if( event.shiftKey == 48){
    event.key = ')'
  }else if(event.shiftKey == 53){
    event.key = '%'
  }
  if(event.keyCode == 88){
    screenValue+='*'
    screen.value = screenValue
  }
  if(event.key <=9 ||
    event.key == '+' ||
    event.key == '-' ||
    event.key == '*' ||
    event.key == '.' ||
    event.key == '/' ||
    event.key == '%' ||
    event.key == '(' ||
    event.key == ')'
    ){
      screenValue += event.key;
      screen.value = screenValue
    }

    if(event.keyCode == 13 || event.keyCode == 187){// enter and =
      checkForBracketMulti()
    }else if(event.keyCode == 46){//delete
      screenValue =''
      screen.value = screenValue;
    }else if(event.keyCode == 8){//backspace
      screenValue = screenValue.slice(0,-1)
      screen.value = screenValue
    }else if(event.keyCode == 67) {//c
      screenValue  = '';
      screen.value = screenValue;
    }else if(event.keyCode == 82){//R
      this.location.reload();
    }
})

window.onerror = function(){
  alert("Please Input valid expression")
  screenValue = '';
  screen.value = screenValue;
}

window.onBracketMultiplication = function(){
  screenValue = addStr(screen.value, screen.value.indexOf('{'), '*')
  screen.value = eval(screenValue)
}

function addStr(str, index, stringToAdd) {
  return(
    str.substring(0,index) + stringToAdd + str.substring(index, str.length)
  )
}

function checkForBracketMulti() {
  if(screen.value.includes('(') &&
  !isNaN(screen.value.charAt(screen.value.indexOf('(')-1))
  ){
    window.onBracketMultiplication();
    return;
  }else {
    console.log(screenValue)
    screen.value = eval(screenValue);
  }
}
