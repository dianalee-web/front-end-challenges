var signInBtn = document.getElementById('sign-in');
var inputBorder = document.querySelectorAll('input');
var textContainer = document.getElementById('text-container');
var insertText = document.getElementById('insertText');

signInBtn.addEventListener('click', function () {
  insertText.innerHTML =
    "<em> Please re-enter, we don't recognize this username / password  </em> ";

  insertText.classList.toggle('hidden');
});
