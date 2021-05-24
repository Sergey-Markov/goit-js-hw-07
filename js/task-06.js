
const inputOfValidation = document.querySelector('#validation-input');



inputOfValidation.addEventListener('change', function () {
    const validValue = Number(inputOfValidation.dataset.length);
    let stringValue = this.value;
    let stringValueWithoutSpace = stringValue.split(' ').join('');
    let presentValue = stringValueWithoutSpace;
    console.log('presentValue:',presentValue);
    console.log('areyValue:',stringValueWithoutSpace);
    if (validValue === presentValue.length) {
        inputOfValidation.classList.add('valid');
        inputOfValidation.classList.replace('invalid', 'valid')
    } else {
        inputOfValidation.classList.add('invalid');
    };
});

