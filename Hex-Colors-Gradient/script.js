const submitBtn = document.querySelector('#submit')
const hexcode1 = document.querySelector('#hexcode1')
const hexcode2 = document.querySelector('#hexcode2')

const hex_number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
let hexColor1 = '';
let hexColor2 = '';
let random_index = 0;

submitBtn.addEventListener('click', () =>{
  hexColor1 = ''
  hexColor2 = ''
  for(let i =0 ; i< 6; i++){
    random_index = Math.floor(Math.random() * hex_number.length)
    hexColor1 += hex_number[random_index];
    random_index = Math.floor(Math.random() * hex_number.length)
    hexColor2 += hex_number[random_index];
  }
  document.body.style.background = `linear-gradient(to right, #${hexColor1},#${hexColor2})`;
  hexcode1.textContent = hexColor1
  hexcode2.textContent = hexColor2
})
