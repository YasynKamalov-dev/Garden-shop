const burger = document.querySelector(".burger-lines");
const navBtn = document.querySelector(".header-navs-btn");
const headLogo = document.querySelector(".header-logo");
const login = document.querySelector(".login");
const head = document.querySelector(".header");

burger.addEventListener("click", mobileMenu);
function mobileMenu(){
    burger.classList.toggle("active");
    navBtn.classList.toggle("active");
    headLogo.classList.toggle("active");
    login.classList.toggle("active")
    head.classList.toggle("active")
}