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

const makeGalleryItemMarkup = images => {
  const { url, alt } = images;
  return `
  <li>
    <img src="${url}" alt="${alt}">
  </li>
  `;
};

console.log(images);
console.log(makeGalleryItemMarkup(images[2]));

const galleryEl = document.querySelector('#gallery');

const makeGalleryItems = images.map(makeGalleryItemMarkup).join('');
galleryEl.insertAdjacentHTML('beforeend', makeGalleryItems);

console.log(makeGalleryItems);
