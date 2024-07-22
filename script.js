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
