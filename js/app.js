/*=============== SEARCH ===============*/
const SearchButton = document.getElementById("search-btn"),
  SearchClose = document.getElementById("search-close"),
  SearchContent = document.getElementById("search-content");

/*=============== ADD SHADOW HEADER ===============*/
if (SearchButton) {
  SearchButton.addEventListener("click", () => {
    SearchContent.classList.add("show-search");
  });
}
if (SearchClose) {
  SearchClose.addEventListener("click", () => {
    SearchContent.classList.remove("show-search");
  });
}

/*=============== LOGIN ===============*/
const LoginButton = document.getElementById("login-btn"),
  LoginClose = document.getElementById("login-close"),
  LoginContent = document.getElementById("login-content");
if (LoginButton) {
  LoginButton.addEventListener("click", () => {
    LoginContent.classList.add("show-login");
  });
}
if (LoginClose) {
  LoginClose.addEventListener("click", () => {
    LoginContent.classList.remove("show-login");
  });
}

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper(".home-swiper", {
  loop: true,
  spaceBetween: -24, // Adjust spacing between slides as needed
  grabCursor: true,
  slidesPerView: "auto", // Ensure slides are shown in full view
  centeredSlides: true, // Center slides in the viewport

  autoplay: {
    delay: 2000, // Set autoplay delay in milliseconds
    disableOnInteraction: false, // Allow autoplay to resume after interaction
  },

  breakpoints: {
    // Corrected property name (singular)
    1220: {
      spaceBetween: -32, // Adjust spacing for larger screens
    },
  },
});

const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper(".featured-swiper", {
  loop: true,
  spaceBetween: 16, // Adjust spacing between slides as needed
  grabCursor: true,
  slidesPerView: "auto", // Ensure slides are shown in full view
  centeredSlides: true, // Center slides in the viewport

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    // Corrected property name (singular)
    1150: {
      slidesPerView: 4, // Ensure slides are shown in full view
      centeredSlides: false,
    },
  },
});

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper(".new-swiper", {
  loop: true,
  spaceBetween: 16, // Adjust spacing between slides as needed
  slidesPerView: "auto", // Ensure slides are shown in full view

  breakpoints: {
    // Corrected property name (singular)
    1150: {
      slidesPerView: 3, // Ensure slides are shown in full view
    },
  },
});

/*=============== TESTIMONIAL SWIPER ===============*/
let swipertestimonial = new Swiper(".tetimonial-swiper", {
  loop: true,
  spaceBetween: 16, // Adjust spacing between slides as needed
  grabCursor: true,
  slidesPerView: "auto", // Ensure slides are shown in full view
  centeredSlides: "auto", // Center slides in the viewport

  breakpoints: {
    // Corrected property name (singular)
    1150: {
      slidesPerView: 3, // Ensure slides are shown in full view
      centeredSlides: false,
    },
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollup = () => {
  const scrollup = document.getElementById("scrollup");
  this.scrollY >= 350
    ? scrollup.classList.add("show-scroll")
    : scrollup.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollup);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight; // Use offsetHeight for element height
    const sectionTop = current.offsetTop - 58; // Adjust offset for potential fixed header
    const sectionId = current.getAttribute("id");

    // Improved element selection using `querySelector` with attribute selector
    const sectionsClass = document.querySelector(
      `.nav-menu a[href*='#${sectionId}']`
    );

    if (scrollDown >= sectionTop && scrollDown < sectionTop + sectionHeight) {
      // Use < for exclusive highlighting
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("change-theme"); // Assuming button ID is 'change-theme'
const darkThemeClass = "dark-theme"; // Consistent class naming
const lightThemeClass = "light-theme"; // Class for light theme
const moonIconClass = "ri-moon-line"; // Class for moon icon
const sunIconClass = "ri-sun-line"; // Class for sun icon

// Retrieve stored theme and icon preferences from localStorage
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Determine initial theme and icon based on localStorage (if set) or current state
let currentTheme = document.body.classList.contains(darkThemeClass)
  ? "dark"
  : "light";
let currentIcon = themeButton.classList.contains(moonIconClass)
  ? "ri-moon-line"
  : "ri-sun-line"; // Use themeButton for icon state

if (selectedTheme) {
  // Apply stored theme and update currentTheme
  document.body.classList.add(
    selectedTheme === "dark" ? darkThemeClass : lightThemeClass
  );
  currentTheme = selectedTheme;

  // Apply stored icon and update currentIcon
  themeButton.classList.add(
    selectedIcon === "ri-moon-line" ? moonIconClass : sunIconClass
  );
  currentIcon = selectedIcon;
}

// Toggle theme and icon on button click
themeButton.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  currentIcon = currentIcon === "ri-moon-line" ? "ri-sun-line" : "ri-moon-line";

  // Update class names based on new theme and icon
  document.body.classList.toggle(darkThemeClass);
  document.body.classList.toggle(lightThemeClass); // Remove opposite class
  themeButton.classList.toggle(moonIconClass);
  themeButton.classList.toggle(sunIconClass); // Remove opposite class

  // Update localStorage with new preferences
  localStorage.setItem("selected-theme", currentTheme);
  localStorage.setItem("selected-icon", currentIcon);
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const src = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  ddelay: 400,
});

src.reveal(
  ".home-data , .featured-container , .new-container , .join-data , .testimonial-container , .footer"
);
src.reveal(".home-imges", { delay: 300 });
src.reveal(".service-card", { interval: 100 });
src.reveal(".discount-data", { origin: "left" });
src.reveal(".discount-imges", { origin: "right" });
