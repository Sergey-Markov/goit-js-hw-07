
const divBoxes = document.querySelector('#boxes');
const inputQuantityBoxes = document.querySelector('input');

const resetBtn = document.querySelector('button[data-action="destroy"]');
const createBtn = document.querySelector('button[data-action="render"]');

let amount = 0;

let color = 'red';
function randomColor(color){
     color ='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
     return color;
};



function createBoxes(amount) {
    amount = inputQuantityBoxes.value;
    for (let i = 1; i <= amount; i += 1){
        const newBox = document.createElement('div');
        newBox.style.width = 20 + (i*10)+'px';
        newBox.style.height = 20 + (i * 10) + 'px';
        newBox.style.marginBottom = 10 +'px';
        newBox.style.backgroundColor = `${randomColor()}`;

        divBoxes.appendChild(newBox);
    };
};



createBtn.addEventListener('click', createBoxes);
resetBtn.addEventListener('click', function () {
    divBoxes.innerHTML = '';
    inputQuantityBoxes.value = '';
});



