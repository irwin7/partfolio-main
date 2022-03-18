const body = document.getElementById("body");
let navIcon = document.querySelector('.nav__icon');

let isDark = false;

// navIcon.addEventListener('click', function() {
//   navIcon.classList.toggle("open");
// })


function navMenu () {
  body.querySelector("header").classList.toggle("nav__menu")
  navIcon.classList.toggle("open__icon");
}

function changeColorDark () {
  isDark = !isDark
  body.classList.toggle("dark");
  body.classList.remove("blue");
  body.classList.remove("white");
}

function changeColorWhite () {
  body.className = "";
  isDark && body.classList.add('dark');
}

function changeColorBlue () {
  body.className = "";
  isDark && body.classList.add('dark');
}

function changeColor(color) {
  body.className = "";
  isDark && body.classList.add('dark');
  body.classList.add(color);
}

function colorWhiteBlue () {
  if (body.classList.contains("dark")) {
    changeColorWhite();
  } else {
    changeColorBlue();
  }
}

$('.skills__icons').slick({
  arrows: false,
  infinite: true,
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 2000,
});