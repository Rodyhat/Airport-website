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

function resetActiveState1() {
  oneWay.classList.remove("active2");
  multiCity.classList.remove("active2");
  roundTrip.classList.remove("active2");
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
  resetActiveState1();
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
  roundTrip.classList.remove("round-trip");
  roundTrip.classList.add("one-way");

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

// depart form calender

const daysElement = document.getElementById("days");
const monthYearElement = document.getElementById("monthYear");
const prevMonthButton = document.getElementById("prevMonth");
const nextMonthButton = document.getElementById("nextMonth");
const calendar = document.getElementById("calendar");
const departInput = document.getElementById("depart");

let currentDate = new Date();

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const startDay =
    firstDayOfMonth.getDay() === 0 ? 7 : firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  monthYearElement.textContent = `${firstDayOfMonth.toLocaleString("default", {
    month: "long",
  })} ${year}`;

  daysElement.innerHTML = "";

  // Add blank days for previous month
  for (let i = 1; i < startDay; i++) {
    const blankDay = document.createElement("div");
    blankDay.classList.add("day", "disabled");
    daysElement.appendChild(blankDay);
  }

  // Add days of current month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("day");
    dayElement.textContent = day;

    if (
      day === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
    ) {
      dayElement.classList.add("today");
    }

    dayElement.addEventListener("click", () => {
      departInput.value = `${year},${String(month + 1).padStart(
        2,
        "0"
      )}-${String(day).padStart(2, "0")}`;
      closeCalendar();
    });

    daysElement.appendChild(dayElement);
  }
}

function openCalendar() {
  calendar.style.display = "block";
}

function closeCalendar() {
  calendar.style.display = "none";
}

prevMonthButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextMonthButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

departInput.addEventListener("click", openCalendar);

renderCalendar();

// trip ideas

function resetActiveState2() {
  beachy.classList.remove(".active3");
  family.classList.remove("active3");
  naturer.classList.remove("active3");
  packing.classList.remove("active3");
  romantist.classList.remove("active3");
  culture.classList.remove("active3");
}

let beachy = document.querySelector(".beach-link");
let family = document.querySelector(".family");
let naturer = document.querySelector(".naturer");
let packing = document.querySelector(".packing");
let romantist = document.querySelector(".romantist");
let culture = document.querySelector(".culture");

let beachLink = document.querySelector(".beach-link");
let familyFriendlyLink = document.querySelector(".family-friendly-link");
let natureLink = document.querySelector(".nature-link");
let backPackingLink = document.querySelector(".backpacking-link");
let romanticLink = document.querySelector(".romantic-link");
let culturalLink = document.querySelector(".cultural-link");

let beach = document.querySelector(".beach");
let familyFriendly = document.querySelector(".family-friendly");
let nature = document.querySelector(".nature");
let backPacking = document.querySelector(".backpacking");
let romantic = document.querySelector(".romantic");
let cultural = document.querySelector(".cultural");


// beach 
beachLink.addEventListener("click" , () =>{
  beachy.classList.add(".active3");
  family.classList.remove("active3");
  naturer.classList.remove("active3");
  packing.classList.remove("active3");
  romantist.classList.remove("active3");
  culture.classList.remove("active3");
  beachy.classList.add("beach-link");
  beachy.classList.remove("family-friendly-link");

  beach.style.display = "block";
  familyFriendly.style.display = "none";
  nature.style.display = "none";
  backPacking.style.display = "none";
  romantic.style.display = "none";
  cultural.style.display = "none";
} )

// family friendly
familyFriendlyLink.addEventListener("click" , () =>{
  resetActiveState2();
  beachy.classList.remove(".active3");
  family.classList.add("active3");
  naturer.classList.remove("active3");
  packing.classList.remove("active3");
  romantist.classList.remove("active3");
  culture.classList.remove("active3");
  beachy.classList.remove("beach-link");
  beachy.classList.add("family-friendly-link");

  beach.style.display = "none";
  familyFriendly.style.display = "block";
  nature.style.display = "none";
  backPacking.style.display = "none";
  romantic.style.display = "none";
  cultural.style.display = "none";
} )

// nature 
natureLink.addEventListener("click" , () =>{
  beachy.classList.remove(".active3");
  family.classList.remove("active3");
  naturer.classList.add("active3");
  packing.classList.remove("active3");
  romantist.classList.remove("active3");
  culture.classList.remove("active3");
  beachy.classList.remove("beach-link");
  beachy.classList.add("family-friendly-link");

  beach.style.display = "none";
  familyFriendly.style.display = "none";
  nature.style.display = "block";
  backPacking.style.display = "none";
  romantic.style.display = "none";
  cultural.style.display = "none";
} )

// backpacking 
backPackingLink.addEventListener("click" , () =>{
  beachy.classList.remove(".active3");
  family.classList.remove("active3");
  naturer.classList.remove("active3");
  packing.classList.add("active3");
  romantist.classList.remove("active3");
  culture.classList.remove("active3");
  beachy.classList.remove("beach-link");
  beachy.classList.add("family-friendly-link");

  beach.style.display = "none";
  familyFriendly.style.display = "none";
  nature.style.display = "none";
  backPacking.style.display = "block";
  romantic.style.display = "none";
  cultural.style.display = "none";
} )

// romantic 
romanticLink.addEventListener("click" , () =>{
  beachy.classList.remove(".active3");
  family.classList.remove("active3");
  naturer.classList.remove("active3");
  packing.classList.remove("active3");
  romantist.classList.add("active3");
  culture.classList.remove("active3");
  beachy.classList.remove("beach-link");
  beachy.classList.add("family-friendly-link");

  beach.style.display = "none";
  familyFriendly.style.display = "none";
  nature.style.display = "none";
  backPacking.style.display = "none";
  romantic.style.display = "block";
  cultural.style.display = "none";
} )

// cultural 
culturalLink.addEventListener("click" , () =>{
  beachy.classList.remove(".active3");
  family.classList.remove("active3");
  naturer.classList.remove("active3");
  packing.classList.remove("active3");
  romantist.classList.remove("active3");
  culture.classList.add("active3");
  beachy.classList.remove("beach-link");
  beachy.classList.add("family-friendly-link");

  beach.style.display = "none";
  familyFriendly.style.display = "none";
  nature.style.display = "none";
  backPacking.style.display = "none";
  romantic.style.display = "none";
  cultural.style.display = "block";
} )