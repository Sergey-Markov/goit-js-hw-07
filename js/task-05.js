
const inputYourName = document.querySelector('#name-input');
const outputStrangersName = document.querySelector('#name-output');

function makeOutput() {
    
    let outputName = outputStrangersName.textContent = this.value;
    // let stringValueWithoutSpace = outputName.split(' ').join(''); ===== я бы все же использовал такой подход
    let stringValueWithoutSpace = outputName.trim();

    console.log(stringValueWithoutSpace);
    if (stringValueWithoutSpace !== '') {
        return outputStrangersName.textContent = stringValueWithoutSpace;
    } else {
        outputStrangersName.textContent = 'незнакомец';
    };
    
};
inputYourName.addEventListener('input', makeOutput);
