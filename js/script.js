window.onload = function () {
  document.body.className += " loaded";
};

let scrollToTopBtn = document.getElementById("BtnScrollToTop");

window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopBtn.style.opacity = "1";
  } else {
    scrollToTopBtn.style.opacity = "0";
  }
};

function scrollToTopFunc() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Exp, Moz, Opera
}

document
  .getElementById("signup-modal__box_close-btn")
  .addEventListener("click", function () {
    document.getElementById("signup-modal").classList.remove("open");
  });

document
  .getElementById("courses-signup-btn")
  .addEventListener("click", function () {
    document.getElementById("signup-modal").classList.add("open");
  });

document
  .getElementById("courses-signup_from_home-btn")
  .addEventListener("click", function () {
    document.getElementById("signup-modal").classList.add("open");
  });
