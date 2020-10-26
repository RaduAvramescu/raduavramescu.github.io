// Navbar hide/unhide

let lastScroll = top;

function isScrolling() {
  window.onscroll = function () {
    let currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0 && lastScroll <= currentScroll) {
      lastScroll = currentScroll;
      header.classList.add("header-hide");
    } else {
      lastScroll = currentScroll;
      if (
        document
          .getElementsByTagName("header")[0]
          .classList.contains("header-hide")
      ) {
        header.classList.remove("header-hide");
        nav.setAttribute("style", "transition-property: none;");
        nav.classList.remove("show");
        setTimeout(() => {
          nav.removeAttribute("style");
        }, 100);
      }
    }
  };
}

isScrolling();

// Navbar collapse

let nav = document.getElementsByClassName("navbar-collapse")[0];

function toggleNav() {
  nav.classList.toggle("show");
}

// Modal

let modal = document.getElementById("myModal");
let modalHeading = document.getElementsByClassName("modal-title")[0];
let modalBody = document.getElementsByClassName("modal-body")[0];

function modalOpen(cardid) {
  let modalBodyReplacement = document.getElementById(cardid).innerHTML;
  modalBody.innerHTML = modalBodyReplacement;
  let projectGif = data.map((a) => a.projectGif);
  document
    .getElementById("myModal")
    .getElementsByClassName("card-img-top")[0]
    .setAttribute("src", projectGif[cardid]);
  document
    .getElementById("myModal")
    .getElementsByClassName("card-img-top")[0]
    .setAttribute("style", "transition: none; filter: none; transform: none;");
  modal.classList.add("d-block");
  setTimeout(() => {
    modal.classList.add("show");
  }, 100);
}

function modalClose() {
  modal.classList.remove("show");
  setTimeout(() => {
    modal.classList.remove("d-block");
  }, 100);
}

// Element fade-in/slide-in

const header = document.querySelector("header");
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.remove("opacity-0");
      entry.target.classList.add("opacity-100");
      if (entry.target.classList.contains("slide-in")) {
        entry.target.classList.add("appear");
      }
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
