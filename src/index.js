window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "./sass/style.scss";

// Current Year
document.getElementById("copyright").innerHTML = "Abdullah All Right Reversed" + " " + new Date().getFullYear();

// Scroll to Up
let scrollUp = document.getElementById("up");

window.onscroll = function () {
  console.log(this.scrollY);
  if (this.scrollY >= 700) {
    scrollUp.classList.add("show");
  } else {
    scrollUp.classList.remove("show");
  }
};

scrollUp.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
