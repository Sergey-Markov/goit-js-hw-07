// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на `1`.

// - Создай переменную `counterValue` в которой будет хранится текущее значение
//   счетчика.
// - Создай функции `increment` и `decrement` для увеличения и уменьшения значения
//   счетчика
// - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterValue = 0;
const spanEl = document.querySelector('#value');
spanEl.textContent = `${counterValue}`
console.log();
const btnIncrement = document.querySelector('button[data-action="increment"]');
console.log(btnIncrement);
const btnDecrement = document.querySelector('button[data-action="decrement"]');

function increment() {
    const acc = counterValue + 1;
    return spanEl.textContent = acc;
    console.log(counterValue);
};
function decrement() {
    return counterValue -= 1;
};

// const decrement = () => {
//    return counterValue -= 1;
// };
btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);