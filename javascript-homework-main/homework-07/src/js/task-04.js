// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const ref = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  span: document.querySelector('#value'),
};
// console.log(ref.decrement);
let counterValue = 0;
ref.decrement.addEventListener('click', onDecrement);
ref.increment.addEventListener('click', onIncrement);

function onDecrement() {
  counterValue -= 1;
  ref.span.textContent = counterValue;
};

function onIncrement() {
  counterValue += 1;
  ref.span.textContent = counterValue;
};