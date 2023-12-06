import './style.css';

const images = [
  {
    src: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    src: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    src: 'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    src: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    src: 'https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];
let count = 0;
const imageLength = images.length;
console.log(imageLength);
const nextBtn = document.querySelector('#right-btn');
const prevBtn = document.querySelector('#left-btn');
const imageContainer = document.querySelector('.image-container');

window.addEventListener('DOMContentLoaded', () => {
  renderImage(count)
});
nextBtn.addEventListener('click', () => {
  count++;
  if (count > imageLength - 1) {
    count = 0;
  }
  renderImage(count);
});

prevBtn.addEventListener('click', () => {
  count--;
  if (count < 0) {
    count = imageLength - 1;
  }
  renderImage(count);
});

function renderImage(count) {
  const imageText = returnImageStructure(count);
  imageContainer.innerHTML = imageText;
  const image = document.querySelector('[data-image]');
  setTimeout(() => {
    image.classList.add('img-transition');
  }, 200);
}

function returnImageStructure(count) {
  return `<img src="${images.at(count).src}" alt="" data-image>`;
}
setInterval(() => {
  const randomCount = Math.round(1 + Math.random()*4);
  renderImage(randomCount)
}, 5000);