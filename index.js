const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const accordion = document.getElementsByClassName("faqs-wrapper");



for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("nav-active");
  primaryNav.classList.toggle("active");
});




