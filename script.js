"strict mode";
//slider
const slide = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");

slide.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

/*slider.style.overflow = "visible";
slider.style.transform = "scale(0.4)translateX(-100px)";*/

const sliderCountainer = document.querySelector(".slider-countainer");
const slideFeature = document.querySelectorAll(".slide-feature-second");
slideFeature.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
/***************************************/
/* NAV Dropdown */
/****************************************/

const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdownIcon = document.querySelector(".dropdown-icon");
//
dropdownBtn.forEach(function (btn) {
  console.log(btn);
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
