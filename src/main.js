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

nextBtn.addEventListener('click', () => {
  count++;
  if (count > imageLength - 1) {
    count = 0;
  }
  const imageText = returnImageStructure(count);
  injectHtml(imageText, imageContainer);

});

prevBtn.addEventListener('click', () => {
  count--;
  if (count < 0) {
    count = imageLength - 1;
    console.log(count);
  }
  const imageText = returnImageStructure(count);
  injectHtml(imageText, imageContainer);

});
const injectHtml = function (htmlText, container) {
  console.log(container.innerHTML);
  clear(container);
  container.innerHtml = htmlText;
  console.log(container.innerHTML);

};

const returnImageStructure = function (count) {
  return `<img src="${images.at(count).src}" alt="">`;
};

function clear(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
