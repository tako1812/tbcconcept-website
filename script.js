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

/************************************************* */
/************************************************* */
/************************************************* */
/************************************************** */
/************************************************** */
/*

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
sliderFunctionality(awardsCountainer);
sliderFunctionality(slider);
sliderFunctionality(productsSlider);
sliderFunctionality(packageSlider);

const slidOffers = (direction) => {
  if (direction === "left") {
    slider.scrollLeft -= 300;
  } else {
    slider.scrollLeft += 300;
  }
};

const slidProducts = (direction) => {
  if (direction === "left") {
    productsSlider.scrollLeft -= 300;
  } else {
    productsSlider.scrollLeft += 300;
  }
};

const slidAwards = (direction) => {
  if (direction === "left") {
    awardsCountainer.scrollLeft -= 300;
  } else {
    awardsCountainer.scrollLeft += 300;
  }
};

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
