// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};
// console.log(refs.#name-output);
refs.input.addEventListener('input', onInput);

function onInput(event) {
  const text = event.target;
  // console.dir(text);
  refs.span.textContent = text.value;
  if (!refs.input.value) {
    refs.span.textContent = 'незнакомец';
  }
}