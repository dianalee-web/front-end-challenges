//task 1
let anAElement = document.querySelector('a');

let allLis = document.getElementsByTagName('li');
// task 2
let secondLi = allLis[1];
anAElement.setAttribute('title', 'cute cat');
secondLi.className = 'newClass';
secondLi.classList.add('newClass2');

// task 3
let newDiv = document.createElement('div');
let innerDivText = document.createTextNode('insert text here');

var mainSection = document
  .getElementsByTagName('section')[0]
  .appendChild(newDiv);
mainSection.innerHTML = 'hello';
mainSection.setAttribute('id', 'text-modify');

// task 4
// **Task: 4**
// - Add a button that `onClick` will call a show/hide toggle function.
// - From that function using JS, add a style attribute of display `block`/`none` to toggle on and off when the function is runs.
let myButton = document.getElementById('button');
myButton.addEventListener('click', changeStyle);

let allh2s = document.querySelector('h2');
function changeStyle() {
  allh2s.style.visibility = 'hidden';
}
