const ref = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};
ref.input.addEventListener('input', onChange);
console.dir(ref.input);
function onChange(event) {
  ref.span.style.fontSize = event.target.value + 'px';
 };