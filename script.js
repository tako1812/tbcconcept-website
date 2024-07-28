"strict mode";

/***************************************/
/* NAV Dropdown */
/****************************************/
const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdownIcon = document.querySelector(".dropdown-icon");
//
dropdownBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    dropdownIcon.classList.toggle("dropdown-icon-rotate");
    const dropdownContent = btn.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
});
/****************************************** */
/****************************************** */
const dropdownBtnNav = document.querySelectorAll(".dropdown-nav");

dropdownBtnNav.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const dropdownContent = btn.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
});
/****************************************** */
/****************************************** */
/******************************************** */
///////////////////////////////////////
// Slider
/*
const slider = function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");

  let curSlide = 0;
  const maxSlide = slides.length;
  let isDragStart = false;
  let prevPageX;
  let prevScrollLeft;

  // Functions

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  let isDragStart = false;
  let prevPageX;
  let prevScrollLeft;

  const dragStart = (e) => {
    //updating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = slider.scrollLeft;
  };

  const dragging = (e) => {
    //scrolling images/carousel to left according to mouse pointer
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff;
  };

  const dragStop = () => {
    isDragStart = false;
  };
  slider.addEventListener("mousedown", dragStart);
  slider.addEventListener("mousemove", dragging);
  slider.addEventListener("mouseup", dragStop);
};
slider();
*/
/*
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  e.preventDefault();
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  //console.log(startX);
});

slider.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  isDown = false;
});

slider.addEventListener("mouseup", (e) => {
  e.preventDefault();
  isDown = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});*/
/************************************************* */
/************************************************* */
/************************************************* */
/************************************************** */
/************************************************** */
/*
const awardsCountainer = document.querySelector(".awards-countainer");
awardsCountainer;

let isDown = false;
let startX;
let scrollLeft;

awardsCountainer.addEventListener("mousedown", (e) => {
  e.preventDefault();
  isDown = true;
  startX = e.pageX - awardsCountainer.offsetLeft;
  scrollLeft = awardsCountainer.scrollLeft;
  //console.log(startX);
});

awardsCountainer.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  isDown = false;
});

awardsCountainer.addEventListener("mouseup", (e) => {
  e.preventDefault();
  isDown = false;
});

awardsCountainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - awardsCountainer.offsetLeft;
  const walk = x - startX;
  awardsCountainer.scrollLeft = scrollLeft - walk;
});
*/
/////////////////////////////////////////////
/////// SLIDER functionality
/************************************************** */
/************************************************** */
const awardsCountainer = document.querySelector(".awards-countainer");
const slider = document.querySelector(".slider");
const productsSlider = document.querySelector(".slider-countainer");
const packageSlider = document.querySelector(".package-countainer");

const sliderFunctionality = function (slider) {
  let isDown = false;
  let startX;
  let scrollLeft;

  const dragStart = (e) => {
    e.preventDefault();
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
  };
  const dragStop = (e) => {
    e.preventDefault();
    isDown = false;
  };
  const dragleave = (e) => {
    e.preventDefault();
    isDown = false;
  };

  slider.addEventListener("mousedown", dragStart);
  slider.addEventListener("mousemove", dragging);
  slider.addEventListener("mouseup", dragStop);
  slider.addEventListener("mouseleave", dragleave);
};
console.log(sliderFunctionality(awardsCountainer));
console.log(sliderFunctionality(slider));
console.log(sliderFunctionality(productsSlider));
console.log(sliderFunctionality(packageSlider));

/*//
/********** */
/*********** */
/*
const awardsCountainer = document.querySelector(".awards-countainer");

const sliderFunctionality = function (slider) {
  let isDown = false;
  let startX;
  let scrollLeft;

  const dragStart = (e) => {
    e.preventDefault();
    isDown = true;
    startX = e.pageX - awardsCountainer.offsetLeft;
    scrollLeft = awardsCountainer.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - awardsCountainer.offsetLeft;
    const walk = x - startX;
    awardsCountainer.scrollLeft = scrollLeft - walk;
  };
  const dragStop = (e) => {
    e.preventDefault();
    isDown = false;
  };
  const dragleave = (e) => {
    e.preventDefault();
    isDown = false;
  };

  awardsCountainer.addEventListener("mousedown", dragStart);
  awardsCountainer.addEventListener("mousemove", dragging);
  awardsCountainer.addEventListener("mouseup", dragStop);
  awardsCountainer.addEventListener("mouseleave", dragleave);
};
console.log(sliderFunctionality(awardsCountainer));
*/
