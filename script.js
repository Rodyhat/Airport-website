// hero imgae transition 7583
const backgroundContainer = document.querySelector(".hero-image");
const images = [
  "./images/hero-img2.jpg",
  "./images/hero-img3.jpg",
  "./images/hero-img1.jpg",
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

// flight way

function resetActiveState() {
  oneWay.classList.remove("active2");
  multiCity.classList.remove("active2");
  roundTrip.classList.remove("active2");

  // oneWay.classList.remove("one-way");
}

let oneWay = document.querySelector(".one-way");
let roundTrip = document.querySelector(".round-trip");
let multiCity = document.querySelector(".multi-city");

let oneWayLink = document.querySelector(".one-way-link");
let roundTripLink = document.querySelector(".round-trip-link");
let multiCityLink = document.querySelector(".multi-city-link");

let oneWayDepart = document.querySelector(".one-way-depart");
let roundWayReturn = document.querySelector(".round-way-return");
let multiCityDepart = document.querySelector(".multi-city-depart");

let addFlight = document.querySelector(".add-flight");

// one way
oneWayLink.addEventListener("click", () => {
  resetActiveState();
  oneWay.classList.add("active2");
  roundTrip.classList.remove("round-trip");
  roundTrip.classList.add("one-way");

  oneWayDepart.style.display = "block";
  roundWayReturn.style.display = "none";
  multiCityDepart.style.display = "none";
  addFlight.style.display = "none";
});

// round trip
roundTripLink.addEventListener("click", () => {
  roundTrip.classList.add("active2");
  oneWay.classList.remove("active2");
  multiCity.classList.remove("active2");

  oneWayDepart.style.display = "none";
  roundWayReturn.style.display = "block";
  multiCityDepart.style.display = "none";
  addFlight.style.display = "none";
});

// multi city
multiCityLink.addEventListener("click", () => {
  multiCity.classList.add("active2");
  oneWay.classList.remove("active2");
  roundTrip.classList.remove("active2");

  multiCityDepart.style.display = "block";
  addFlight.style.display = "block";
  roundWayReturn.style.display = "none";
  oneWayDepart.style.display = "none";
});


// from for one way flight pop1
const input1 = document.getElementById("fromCityInput");
const popup1 = document.getElementById("fromCityPopup");
const cancel = document.getElementById("fromCancel");

// Show popup when input is clicked
input1.addEventListener("focus", () => {
  popup1.style.display = "block";
});

// Hide popup when clicking the cancel icon
cancel.addEventListener("click", () => {
  popup1.style.display = "none";
});

// Add city name to input when a city is clicked
popup1.addEventListener("click", (e) => {
  if (e.target.classList.contains("country")) {
    input1.value = e.target.textContent;
    popup1.style.display = "none";
  }
});

// from for one way flight pop1
const input2 = document.getElementById("toCityInput");
const popup2 = document.getElementById("toCityPopup");
const cancel2 = document.getElementById("toCancel");

// Show popup when input is clicked
input2.addEventListener("focus", () => {
  popup2.style.display = "block";
});

// Hide popup when clicking the cancel icon
cancel2.addEventListener("click", () => {
  popup2.style.display = "none";
});

// Add city name to input when a city is clicked
popup2.addEventListener("click", (e) => {
  if (e.target.classList.contains("country")) {
    input2.value = e.target.textContent;
    popup2.style.display = "none";
  }
});

