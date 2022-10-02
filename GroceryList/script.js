// const addHave = document.getElementById('addHave')
// const addNeed = document.getElementById('addNeed')
// let items = document.querySelectorAll('.item')

// addHave.addEventListener('click',callback,true)
// addNeed.addEventListener('click', callback,true)

// function callback(e){
//   e.preventDefault();
//   e.stopPropagation();
//   const input = document.getElementById('input-id')
//   const need = (e.target.id === 'addNeed')
//   const value = input.value

//   let firstUL = document.getElementsByTagName('ul')[0];
//   let secondUL = document.getElementsByTagName('ul')[1];
//   const aTag = document.createElement('a')
//   aTag.href = '#'
//   aTag.innerHTML = '&#10006;'

//   const checkbox = document.createElement('input');
//   checkbox.name = 'item';
//   checkbox.type = 'checkbox';
//   checkbox.innerText = value;

//   const li = document.createElement('li');
//   li.appendChild(checkbox)
//   li.appendChild(aTag)
//   const list = (need) ? firstUL : secondUL

//   input.value = ''
//   input.focus()

//   if (value === "") return;

//   if (!need) {
//     checkbox.checked = true;
//   }
//   list.appendChild(li)
//   return
// }

// console.log(document.querySelectorAll('ul')[0])
// document.querySelectorAll('ul')[0].addEventListener('click', (e)=>{
//   console.log(e)
//   this.removeChild(e.target.parentNode);
// })

// document.querySelectorAll('ul')[1].addEventListener('click', (e) => {
//   this.removeChild(e.target.parentNode);
// })
$(function () {
  var callback = function (event) {
    event.preventDefault();
    var input = $('input[type=text][name=item]'),
      value = input.val(),
      need = ($(event.target).attr('id') === 'addNeed'),
      item = $('<li><input type="checkbox" name="item"> ' + value + ' <a href="#">remove</a></li>'),
      list = (need) ? $('ul').first() : $('ul').last();

    input.val("");
    input.focus();

    if (value === "") return;

    if (!need) {
      item.find('input').attr('checked', true);
    }
    item.appendTo(list);
  }

  $('#addHave, #addNeed').click(callback);

  $('ul').on('click', 'li a', function (event) {
    $(event.target).parent('li').remove();
  });

  $('ul').on('click', 'input[type=checkbox]', function (event) {
    var listItem = $(event.target).parent('li'),
      list = (event.target.checked) ? $('ul').last() : $('ul').first();
    listItem.appendTo(list);
  });
});
