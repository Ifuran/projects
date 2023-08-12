// Ambil elemen
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(`Ada kesalahan, pastikan ${selector} ada atai ditulis dengan benar.`);
};

//Nav styles on scroll
const scrollHeader = () => {
  const headerElement = selectElement("#header");
  if (this.scrollY >= 15) {
    headerElement.classList.add("activated");
  } else {
    headerElement.classList.remove("activated");
  }
};

window.addEventListener("scroll", scrollHeader);

// Buka menu dan pop up pencarian
const menuToggleIcon = selectElement("#btn-menu");

const toggleMenu = () => {
  const mobileMenu = selectElement("#menu");
  mobileMenu.classList.toggle("activated");
  menuToggleIcon.classList.toggle("activated");
};

menuToggleIcon.addEventListener("click", toggleMenu);

// Search form
const formOpenBtn = selectElement("#btn-search");
const formCloseBtn = selectElement("#form-close-btn");
const searchFormContainer = selectElement("#search-form-container");

formOpenBtn.addEventListener("click", () => {
  searchFormContainer.classList.add("actived");
});

formCloseBtn.addEventListener("click", () => {
  searchFormContainer.classList.remove("actived");
});

// Close dengan tombol Esc
window.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    searchFormContainer.classList.remove("actived");
  }
});

// Mode tema
const bodyElement = document.body;
const themeToggleBtn = selectElement("#theme-toggle-btn");
const currentTheme = localStorage.getItem("currentTheme");

if (currentTheme) {
  bodyElement.classList.add("light-theme");
}

themeToggleBtn.addEventListener("click", () => {
  bodyElement.classList.toggle("light-theme");

  if (bodyElement.classList.contains("light-theme")) {
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currentTheme");
  }
});

// Swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
