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
  roundTrip.classList.remove("active2");
  oneWay.classList.remove("active2");

  multiCityDepart.style.display = "block";
  addFlight.style.display = "block";
  roundWayReturn.style.display = "none";
  oneWayDepart.style.display = "none";
});

// flight ways
// let oneWay = document.querySelector(".one-way");
// let roundTrip = document.querySelector(".round-trip");
// let multiCity = document.querySelector(".multi-city");

// let oneWayLink = document.querySelector(".one-way-link");
// let roundTripLink = document.querySelector(".round-trip-link");
// let multiCityLink = document.querySelector(".multi-city-link");

// let oneWayDepart = document.querySelector(".one-way-depart");
// let roundWayReturn = document.querySelector(".round-way-return");
// let multiCityDepart = document.querySelector(".multi-city-depart");

// addFlight = document.querySelector(".add-flight");

// // one way
// oneWayLink.addEventListener("click", () => {
//   oneWay.classList.replace("one-way", "round-trip");
//   roundTrip.classList.replace("round-trip", "one-way");
//   multiCity.classList.replace("multi-city", "multi-city");
//   oneWayDepart.style.display = "block";
//   addFlight.style.display = "none";
//   roundWayReturn.style.display = "none";
//   multiCityDepart.style.display = "none";

// });

// // round trip
// roundTripLink.addEventListener("click", () => {
//   roundTrip.classList.replace("one-way", "round-trip");
//   oneWay.classList.replace("round-trip", "one-way");
//   multiCity.classList.replace("one-way", "multi-city");
//   roundWayReturn.style.display = "block";
//   oneWayDepart.style.display = "none";
// });

// // multi city
// multiCityLink.addEventListener("click", () => {
//   // multiCity.classList.replace("multi-city", "round-trip");
//   roundTrip.classList.replace("round-trip", "one-way");
//   oneWay.classList.replace("one-way", "multi-city");
//   multiCityDepart.style.display = "block";
//   addFlight.style.display = "block";
//   roundWayReturn.style.display = "none";
//   oneWayDepart.style.display = "none";
// });

// pop up country
// 
// Select all city inputs and popups
const inputs = document.querySelectorAll(".cityInput");
const popups = document.querySelectorAll(".cityPopup");

// Function to show the correct popup
function showPopup(input, popup) {
  const rect = input.getBoundingClientRect();
  popup.style.top = `${rect.bottom + window.scrollY}px`;
  popup.style.left = `${rect.left + window.scrollX}px`;
  popup.style.display = "grid";
}

// Event listener for each input
inputs.forEach((input) => {
  input.addEventListener("click", () => {
    // Find the corresponding popup
    const popup = input.closest("div").querySelector(".city-popup");
    showPopup(input, popup);
  });
});

// Hide popups when clicking outside
document.addEventListener("click", (e) => {
  popups.forEach((popup) => {
    const input = popup.previousElementSibling.querySelector(".city-input");
    if (e.target !== input && !popup.contains(e.target)) {
      popup.style.display = "none";
    }
  });
});

// Add city name to input when a city is clicked
popups.forEach((popup) => {
  popup.addEventListener("click", (e) => {
    if (e.target.classList.contains("country")) {
      const input = popup.closest("div").querySelector(".city-input");
      input.value = e.target.textContent;
      popup.style.display = "none";
    }
  });
});
