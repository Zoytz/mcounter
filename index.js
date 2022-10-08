const form = document.querySelector('form');

const scostInput = document.getElementById('scost');
const scountInput = document.getElementById('scount');
const acostInput = document.getElementById('acost');
const procInput = document.getElementById('proc');
const yearsInput = document.getElementById('years');

const formTitle = document.querySelector('.form__title');



function moneyCounter() {
  
  const money = (scostInput.value * scountInput.value * 30 * 12) + (acostInput.value * 4 *12);
  const yearsArr = [];
  for (let i = money; i < 10000000; i = (i * (procInput.value / 100 + 1)) + money) {
    yearsArr.push(Math.floor(i));
  }
  const values = yearsArr[yearsInput.value -1];
  formTitle.textContent = values;
  formTitle.classList.add('form__title_type_visible');
}

function handleSubmit(e) {
  e.preventDefault();
  formTitle.textContent = '';
  formTitle.classList.remove('form__title_type_visible');
  setTimeout(moneyCounter, 200);
}

form.addEventListener('submit', handleSubmit);