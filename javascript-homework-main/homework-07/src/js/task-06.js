const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', onBlur);
function onBlur(e) {
  const text = e.target;
  if (text.value.length === Number(text.dataset.length)) {
    inputRef.classList.add('valid')
    inputRef.classList.remove('invalid')
    return
  }
  inputRef.classList.add('invalid')

}