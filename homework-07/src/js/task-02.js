const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulEl = document.querySelector('#ingredients');
const ingredientsLiEl = ingredients.map(
    ingedient => {
      const newLiEl = document.createElement('li');
      newLiEl.textContent = ingedient;
      ulEl.appendChild(newLiEl);
    }
);