

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const ulEl = document.querySelector('#gallery');
ulEl.classList.add('gallery');

const makeGalleryElementsMarkup = ({ url, alt }) => {
  return `
          <li class="gallery__items"><img src=${url} alt='${alt}' class="gallery__image"></li>
        `;
};
const makeGalleryElements = images
  .map(makeGalleryElementsMarkup)
  .join('');

ulEl.insertAdjacentHTML("afterbegin", makeGalleryElements);






// *************** Other solution task ************
// const imgEl = images.map(image => {
//     const createLiElement = document.createElement('li');
//     createLiElement.classList.add('gallery__items')
//     const imgEl = document.createElement('img');
//     imgEl.src = image.url;
//     imgEl.alt = image.alt;
//     imgEl.classList.add('gallery__image')
//     const imegeItemEl = createLiElement.appendChild(imgEl);
//     return createLiElement;
// });
// ulEl.append(...imgEl);


