const backgroundContainer = document.querySelector('.hero-image');
const images = [
    './images/hero-img7.jpg',
   './images/hero-img8.jpg',
    './images/hero-img6.jpg'
   
];

let currentIndex = 0;

setInterval(() => {
    backgroundContainer.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}, 2000);


// navbar
const navbar1 = document.querySelector('.navbar1');
const navbar2 = document.querySelector('.navbar2');
const show = document.querySelector(".show");
const moreLinks = document.querySelector('.navbar-more-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar2.style.display = "block";
        navbar1.style.display = "none";
        navbar2.classList.add('fixed');
        navbar2.style.backgroundColor = '#fff'; /* change the background color to a dark gray */
        moreLinks.classList.remove('hidden');


    } else {
        navbar2.classList.remove('fixed');
        navbar1.style.backgroundColor = 'transparent'; /* reset the background color to transparent */
        moreLinks.classList.add('hidden');
        show.style.display = "block";
        navbar2.style.display = "none";

    }
});
