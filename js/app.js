const hamburderBtn = document.querySelector(".hamburger-menu-icon");
const navDiv = document.querySelector(".navigation");
const crossBtn = document.querySelector(".hamburger-menu-icon-visible");

function openNav() {
    navDiv.style.transform = "translateY(-100vh)";
}
crossBtn.addEventListener("click", openNav);

function closeNav() {
    navDiv.style.transform = "translateY(100vh)"
}
hamburderBtn.addEventListener("click", closeNav);

const plusBtn = document.querySelector(".navigation-list-plus");
const productList = document.querySelector(".navigation-list-products");
let rotateDeg = 90;
plusBtn.addEventListener("click", () => {
    productList.classList.toggle("hidden");
    plusBtn.style.transform = "rotate(" + rotateDeg + "deg)";
    rotateDeg += 45;
})
// Function that changes images on item page
const current = document.getElementById('current');
const imgs = document.querySelector('.thumbnails');

imgs.addEventListener('click', imgClick);

function imgClick(e) {
    current.src = e.target.src;

}