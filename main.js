import './style.css'


import Masonry from 'masonry-layout'

window.onload=()=>{

  const grid=document.querySelector('.grid');

  const masonry=new Masonry(grid,{itemSelector:'.grid-item',
  gutter:15,
  
});
}




const ofertaParagraph = document.getElementById('oferta');
const list = document.getElementById('list');

ofertaParagraph.addEventListener('click', () => {
  
  list.classList.toggle('hidden');
});


document.addEventListener('DOMContentLoaded', function () {
  const searchIcon = document.getElementById('search-icon');
  const searchBar = document.getElementById('search-bar');

  searchIcon.addEventListener('click', function () {
    searchBar.classList.toggle('hidden');
    if (!searchBar.classList.contains('hidden')) {
      searchBar.focus(); 
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const images = [
      "img1.jpg", "img2.jpg", "img3.jpg",
      "img4.jpg", "img5.jpg", "img6.jpg",
      "img7.jpg", "img8.jpg", "img9.jpg",
      "img10.jpg", "img11.jpg"
  ];

  let currentImageIndex = 0;
  const imgElement = document.querySelector('.right img');

  const buttonLeft = document.getElementById('buttonarrowleft');
  buttonLeft.addEventListener('click', function () {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      imgElement.src = `assets/${images[currentImageIndex]}`;
  });

  const buttonRight = document.getElementById('buttonarrowright');
  buttonRight.addEventListener('click', function () {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      imgElement.src = `assets/${images[currentImageIndex]}`;
  });
});

document.querySelectorAll('.smooth-scroll').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

window.onload = () => {
  const grid = document.querySelector('.grid');
  const expandButton = document.getElementById('expandButton');
  const images = Array.from(grid.querySelectorAll('.grid-item'));

  const initialVisibleImages = 4;
  let isExpanded = false;

  expandButton.addEventListener('click', () => {
    isExpanded = !isExpanded;
    updateImageVisibility();
  });

  function updateImageVisibility() {
    images.forEach((image, index) => {
      if (isExpanded) {
        image.style.opacity = 1;
      } else {
        image.style.opacity = index < initialVisibleImages ? 1 : 0;
      }
    });
  }

  // Initial setup
  updateImageVisibility();
};



const gridItems = document.querySelectorAll('.grid-item img');
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const closeBtn = document.getElementById('close-btn');

gridItems.forEach((img) => {
  img.addEventListener('click', () => {
    const clonedImg = img.cloneNode(true);
    lightboxContent.innerHTML = '';
    lightboxContent.appendChild(clonedImg);
    lightbox.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    lightbox.style.display = 'none';
  }
});