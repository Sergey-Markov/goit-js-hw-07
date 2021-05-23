
const inputRange = document.querySelector('#font-size-control');
const styleEl = document.querySelector('style');
const outputText = document.querySelector('text');

let fontSizeText = 0;
inputRange.addEventListener('input', function () {
    styleEl.insertAdjacentHTML('beforeend',
        `span{
        font-size: ${fontSizeText};
      }`
    );
    return fontSizeText = this.value +'px';
});
