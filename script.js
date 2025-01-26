function Like(l) {
  document.querySelectorAll(".fa-heart")[l].classList.toggle("fa-heart-red");
}

function Cart(c) {
  document
    .querySelectorAll(".fa-cart-shopping")
    [c].classList.toggle("fa-cart-shopping-gray");
}

// =================hamburger=====================

function hanburger() {
  document.querySelector(".canvas_hide").classList.toggle("canvas_show");
  document.querySelector("body").classList.toggle("body_scroll");
  document.querySelector(".dropdown").classList.toggle("dropdown_show");
}

function dropdown_show() {
  document.querySelector(".dropdown").classList.add("dropdown_show");
  console.log("Dropdown");
}
function dropdown_hide() {
  document.querySelector(".dropdown").classList.remove("dropdown_show");
  console.log("Dropdown hide");
}

function product(event) {
  event.stopPropagation();
  console.log("product called");
  document
    .querySelector(".canvas_product_menu_hide")
    .classList.add("canvas_product_menu_show");
}

function product_remove(event) {
  event.stopPropagation();
  document
    .querySelector(".canvas_product_menu_show")
    .classList.remove("canvas_product_menu_show");
}

function laptop(event) {
  event.stopPropagation();
  document
    .querySelector(".canvas_hide_laptop_menu")
    .classList.add("canvas_show_laptop_menu");
}

function laptop_remove(event) {
  event.stopPropagation();
  document
    .querySelector(".canvas_hide_laptop_menu")
    .classList.remove("canvas_show_laptop_menu");
}

//=================== accordant==================
function Acc(A) {
  document.querySelectorAll(".answer")[A].classList.toggle("active_faq");
  document.querySelectorAll(".fa-caret-down")[A].classList.toggle("Rotate");
}

// =================Counter =====================
{
  let val1 = 0;
  function Counter1() {
    if (val1 < 64) {
      document.querySelector(".Num1").innerHTML = ++val1;
    }
  }
  const counterInterval1 = setInterval(Counter1, 100);
}

{
  let val2 = 0;
  function Counter2() {
    if (val2 < 38) {
      document.querySelector(".Num2").innerHTML = ++val2;
    }
  }
  const counterInterval2 = setInterval(Counter2, 100);
}

{
  let val3 = 0;
  function Counter3() {
    if (val3 < 59) {
      document.querySelector(".Num3").innerHTML = ++val3;
    }
  }
  const counterInterval3 = setInterval(Counter3, 100);
}
//=============== tab form
function tabformshow() {
  document
    .querySelector(".sign_in_form_tab")
    .classList.add("sign_in_form_show");
  console.log("sign_in_form_show");
}

function tabformhide() {
  document
    .querySelector(".sign_in_form_tab")
    .classList.remove("sign_in_form_show");
  console.log("sign_in_form_hide");
}

//============ popup form
function formshow() {
  document.querySelector(".form_section").classList.toggle("form_section_show");
  document.querySelector("body").classList.toggle("body_scroll");
}
setTimeout(formshow, 3000);

// form validation
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    ``;
    const name = document.getElementById("Name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirmPassword")
      .value.trim();

    if (name === "") {
      alert("Please enter your name.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Signup successful!");
    document.getElementById("signupForm").submit();
  });


let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
let autoSlide;

// Show the current slide
const showSlide = (index) => {
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
};

// Move to the next or previous slide
const moveSlide = (step) => {
  currentSlide = (currentSlide + step + slides.length) % slides.length;
  showSlide(currentSlide);
};

// Start and stop auto-slide
const startAutoSlide = () => {
  autoSlide = setInterval(() => moveSlide(1), 3000);
};

const stopAutoSlide = () => clearInterval(autoSlide);

// Event listeners for navigation buttons
document.querySelector(".next").onclick = () => moveSlide(1);
document.querySelector(".back_button").onclick = () => moveSlide(-1);



// Initialize slider
showSlide(currentSlide);
startAutoSlide();
