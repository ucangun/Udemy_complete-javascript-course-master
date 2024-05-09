'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number';

document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value;
document.querySelector('.guess').value = 23;
*/

document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = ' ⛔️ No Number';
  }
});
