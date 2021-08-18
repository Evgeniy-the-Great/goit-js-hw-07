const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulRef = document.querySelector('#ingredients');
const ingrItems = ingredients.map(ingr => {
  const listRef = document.createElement('li');
  listRef.textContent = ingr;
  return listRef;
});

ulRef.append(...ingrItems);
console.log(ulRef);