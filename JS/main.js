// Copy Menu For Mobile
function copyMenu() {
  // Copy Inside .dpt-cat to Departments
  let dptCategory = document.querySelector(".dpt-cat");
  let dptPlace = document.querySelector(".departments");
  dptPlace.innerHTML = dptCategory.innerHTML;
  //   Copy Inside Nav To Nav
  let mainNav = document.querySelector(".header-nav nav");
  let navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;
  // Copy .header-top .wrapper To .thetop-nav
  let topNav = document.querySelector(".header-top .wrapper");
  let topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();

// Show Mobile Menu

const menuButton = document.querySelector(".trigger"),
  closeButton = document.querySelector(".t-close"),
  addclass = document.querySelector(".site");

menuButton.addEventListener("click", function () {
  addclass.classList.toggle("showmenu");
});
closeButton.addEventListener("click", function () {
  addclass.classList.remove("showmenu");
});

// Show Sub Menu On Mobile

const subMenu = document.querySelectorAll(".has-child .icon-small");
subMenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
  e.preventDefault();
  subMenu.forEach((item) =>
    item != this ? item.closest(".has-child").classList.remove("expand") : null
  );
  if (this.closest(".has-child").classList != "expand");
  this.closest(".has-child").classList.toggle("expand");
}

// slider
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

// show search

const searchButton = document.querySelector(".t-search"),
  tClose = document.querySelector(".search-close"),
  showClass = document.querySelector(".site");

searchButton.addEventListener("click", function () {
  showClass.classList.toggle("showsearch");
});
tClose.addEventListener("click", function () {
  showClass.classList.remove("showsearch");
});

// Show Dept Menu

const dptButton = document.querySelector(".dpt-cat .dpt-trigger"),
  dptClass = document.querySelector(".site");

dptButton.addEventListener("click", function () {
  dptClass.classList.toggle("showdpt");
});

// // Products Image Slider
var productThumb = new Swiper(".small-image", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlideProgress: true,
  breakepoints: {
    481: {
      spaceBetween: 32,
    },
  },
});

var productBig = new Swiper(".big-image", {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: productThumb,
  },
});

//Stock Products Bar Width Percentage
var stocks = document.querySelectorAll(".products .stock");
for (let x = 0; x < stocks.length; x++) {
  let stock = stocks[x].dataset.stock,
    avaliable = stocks[x].querySelector(".qty-available").innerHTML,
    sold = stocks[x].querySelector(".qty-sold").innerHTML,
    percent = (sold * 100) / stock;

  stocks[x].querySelector(".available").style.width = percent + "%";
}

// show cart on click
const divtoShow = ".mini-cart";
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector(".cart-trigger");

divTrigger.addEventListener("click", () => {
  setTimeout(() => {
    if (!divPopup.classList.contains("show")) {
      divPopup.classList.add("show");
    }
  }, 250);
});

//  close by click outside

document.addEventListener("click", (e) => {
  const isClosest = e.target.closest(divtoShow);
  if (!isClosest && divPopup.classList.contains("show")) {
    divPopup.classList.remove("show");
  }
});

// Back To Top Button

let btn = document.querySelector(".backtotop");

window.onscroll = function () {
  if (this.scrollY >= 600) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
};

btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Dark Theme

let dark = document.querySelector(".dark");
let body = document.body;
let darkBtn = document.querySelector(".darkbtn .icon-large i");

// Set the icon based on the current theme
if (localStorage.getItem("data-theme")) {
  body.classList.add("data-theme");
  darkBtn.className = "ri-sun-line"; // Change this to your light mode icon class
} else {
  darkBtn.className = "ri-moon-line"; // Change this to your dark mode icon class
}

dark.addEventListener("click", function () {
  body.classList.toggle("data-theme");

  // Toggle the icon
  if (body.classList.contains("data-theme")) {
    localStorage.setItem("data-theme", true);
    darkBtn.className = "ri-sun-line"; // Change this to your light mode icon class
  } else {
    localStorage.removeItem("data-theme");
    darkBtn.className = "ri-moon-line"; // Change this to your dark mode icon class
  }
});
