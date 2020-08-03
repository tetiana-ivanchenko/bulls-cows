'use strict';

let count = 0;

function bullsAndCows(generatedNumber = '1296',
  enteredNumber = document.getElementById('input').value) {
  const regExp = /^[A-Za-z]+$/;
  const result = {};
  
  result.bulls = 0;
  result.cows = 0;

  if (enteredNumber === undefined || enteredNumber.length !== 4
    || regExp.test(enteredNumber)) {
    alert('Неправильно введено значение, попробуйте снова!');
    document.getElementById('input').value = '';

    return;
  }

  for (let i = 0; i < generatedNumber.length; i++) {
    for (let j = 0; j < enteredNumber.length; j++) {
      if (generatedNumber[i] === enteredNumber[j] && i === j) {
        result.bulls++;

        if (result.bulls === 4) {
          alert ('You win!!!!');
          document.getElementById('input').value = '';

          return;
        }
        generatedNumber.split('').splice(i, 1, 't').join('');
        enteredNumber.split('').splice(j, 1, 't').join('');
      }

      if (generatedNumber[i] === enteredNumber[j] && i !== j) {
        result.cows++;
        generatedNumber.split('').splice(i, 1, 't').join('');
        enteredNumber.split('').splice(j, 1, 't').join('');
      }
    }
  }

  const news = document.createElement('div');

  document.body.appendChild(news);

  news.innerHTML = `Попытка ${count = count + 1}! Всего:${result.bulls} быков и
  ${result.cows}
  коров. <br/> Введеное значение ${document.getElementById('input').value}`;
  document.getElementById('input').value = '';

  return status;
}
