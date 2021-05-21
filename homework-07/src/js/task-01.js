
const listsOfItem = document.querySelectorAll('.item');
console.log(listsOfItem.length);


const everyGroupOfList = listsOfItem.forEach((el, index) => {
    const category = el.querySelector('h2').textContent;
    const countOfCategoryElements = el.querySelectorAll('li').length;
    console.log(`- Категория: ${category}`);
    console.log(`- Количество элементов: ${countOfCategoryElements}
    `);

});