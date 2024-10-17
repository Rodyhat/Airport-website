// hero imgae transition
const backgroundContainer = document.querySelector(".hero-image");
const images = [
  "./images/hero-img7.jpg",
  "./images/hero-img8.jpg",
  "./images/hero-img6.jpg",
];

let currentIndex = 0;

setInterval(() => {
  backgroundContainer.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}, 2000);

// navbar
const navbar1 = document.querySelector(".navbar1");
const navbar2 = document.querySelector(".navbar2");
const show = document.querySelector(".show");
const moreLinks = document.querySelector(".navbar-more-links");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar2.style.display = "block";
    navbar1.style.display = "none";
    navbar2.classList.add("fixed");
    navbar2.style.backgroundColor =
      "#fff"; /* change the background color to a dark gray */
    moreLinks.classList.remove("hidden");
  } else {
    navbar2.classList.remove("fixed");
    navbar1.style.backgroundColor =
      "transparent"; /* reset the background color to transparent */
    moreLinks.classList.add("hidden");
    show.style.display = "block";
    navbar2.style.display = "none";
  }
});

// flight ways
let oneWay = document.querySelector(".one-way");
let oneWayLink = document.querySelector(".one-way-link");
let roundTripLink = document.querySelector(".round-trip-link"); 
let oneWayDepart = document.querySelector(".one-way-depart");
let roundWayReturn = document.querySelector(".round-way-return");
let roundTrip = document.querySelector(".round-trip");

oneWayLink.addEventListener("click", () =>{
    oneWay.style.color = "green";
    oneWay.style.backgroundColor = "#E7FDDC";
    oneWay.style.borderRadius = "18px";
    oneWayDepart.style.display = "block";
    roundWayReturn.style.display = "none";
    roundTrip.className = oneWay.className;
});

roundTripLink.addEventListener("click", () =>{
    roundWayReturn.style.display = "block";
    oneWayDepart.style.display = "none";
    
});


