"strict mode";

const sectionHero = document.querySelector(".section-hero");
const header = document.querySelector(".header");

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (entry.isIntersecting) {
    header.classlist.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});
headerObserver.observe(header);

//slider
const slide = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");

slide.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

/*slider.style.overflow = "visible";
slider.style.transform = "scale(0.4)translateX(-100px)";*/
