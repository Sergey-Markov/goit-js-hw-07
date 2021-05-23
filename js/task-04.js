
const spanEl = document.querySelector('#value');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');


let counterValue = 0;

function increment() {
    counterValue = counterValue + 1;
    return spanEl.textContent = counterValue;
};
function decrement() {
    counterValue = counterValue - 1;
    return spanEl.textContent = counterValue;
};

btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);