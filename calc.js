const num = document.querySelectorAll('.num');
const calc = document.querySelectorAll('.func');
const display = document.querySelector('.screen');
const result = document.querySelector('.result');
const clear = document.querySelector('.clear');

document.querySelectorAll('.num').forEach(function (num) {
  num.addEventListener('click', takeInfo);
});

document.querySelectorAll('.func').forEach(function (num) {
  num.addEventListener('click', takeInfo);
});

result.addEventListener('click', function (e) {
  console.log('I work');
});

clear.addEventListener('click', function (e) {
  console.log('I work');
});

function takeInfo(e) {
  const info = e.currentTarget.innerHTML.concat();

  display.textContent = info;
}
