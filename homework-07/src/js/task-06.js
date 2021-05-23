
const inputOfValidation = document.querySelector('#validation-input');



inputOfValidation.addEventListener('change', function () {
    const validValue = Number(inputOfValidation.dataset.length);
    
    let presentValue = this.value;
    if (validValue === presentValue.length) {
        inputOfValidation.classList.add('valid');
        inputOfValidation.classList.replace('invalid', 'valid')
    } else {
        inputOfValidation.classList.add('invalid');
    };
});