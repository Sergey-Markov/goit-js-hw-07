
const inputYourName = document.querySelector('#name-input');
const outputStrangersName = document.querySelector('#name-output');

function makeOutput() {
    
    let outputName = outputStrangersName.textContent = this.value;
    if (outputName !== '') {
        return outputStrangersName.textContent = this.value;
    } else {
        outputStrangersName.textContent = 'незнакомец';
    };
    
};
inputYourName.addEventListener('input', makeOutput);
