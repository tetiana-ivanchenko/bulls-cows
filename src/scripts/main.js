'use strict';

let count = 0;

function bullsAndCows(generatedNumber = '1296',
  enteredNumber = document.getElementById('input').value) {
  const regExp = /^[A-Za-z]+$/;
  const result = {};
  let generated = generatedNumber;
  let entered = enteredNumber;

  result.bulls = 0;
  result.cows = 0;

  if (entered === undefined || entered.length !== 4
    || regExp.test(entered)) {
    alert('Неправильно введено значение, попробуйте снова!');
    document.getElementById('input').value = '';

    return;
  }

  for (let i = 0; i < generated.length; i++) {
    for (let j = 0; j < entered.length; j++) {
      if (generated[i] === entered[j]
      && i === j && generated[i] !== ' ') {
        result.bulls++;
        generated = generated.split('');
        generated.splice(i, 1, ' ');
        generated = generated.join('');
        entered = entered.split('');
        entered.splice(j, 1, ' ');
        entered = entered.join('');
      }

      if (generated[i] === entered[j] && i !== j) {
        result.cows++;
        generated = generated.split('');
        generated.splice(i, 1, ' ');
        generated = generated.join('');
        entered = entered.split('');
        entered.splice(j, 1, ' ');
        entered = entered.join('');
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
