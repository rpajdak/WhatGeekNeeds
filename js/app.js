

// // Open/close menu funtion.
// const hamburderBtn = document.querySelector(".hamburger-menu-icon");
// const navDiv = document.querySelector(".navigation");
// const crossBtn = document.querySelector(".hamburger-menu-icon-visible");

// function openNav() {
//     navDiv.style.transform = "translateY(-100vh)";
// }
// crossBtn.addEventListener("click", openNav);

// function closeNav() {
//     navDiv.style.transform = "translateY(100vh)"
// }
// hamburderBtn.addEventListener("click", closeNav);



// // Open/close navigation function
// const plusBtn = document.querySelector(".navigation-list-plus");
// const productList = document.querySelector(".navigation-list-products");
// let rotateDeg = 90;
// plusBtn.addEventListener("click", () => {
//     productList.classList.toggle("hidden");
//     // plusBtn.style.transform = "rotate(" + rotateDeg + "deg)";
//     plusBtn.classList.toggle("rotated");
//     rotateDeg += 45;
// })
// // Function that changes images on item page
// const current = document.getElementById('current');
// const imgs = document.querySelector('.thumbnails');

// imgs.addEventListener('click', (e) =>{
//     current.src = e.target.src;
// });



// // Show/hide faq paragraph
// const faqBtn = document.querySelectorAll(".faq-btn");
// const faqPar = document.querySelectorAll(".faq-par");
// for (let i = 0; i < faqBtn.length; i++) {
//     faqBtn[i].addEventListener("click", () => {
//         faqPar[i].classList.toggle("shown");
//         faqBtn[i].classList.toggle("active");
//     })
// }
// // Show/hide item description, detail sizing function
// const itemBtn = document.querySelectorAll(".description-list-element");
// const descriptionParagraphs = document.querySelectorAll(".item-details");
// for (let i = 0; i < itemBtn.length; i++) {
//     itemBtn[i].addEventListener("click", () => {
//         for (let i = 0; i < descriptionParagraphs.length; i++) {
//             descriptionParagraphs[i].classList.add("hide");
//         }
//         descriptionParagraphs[i].classList.remove("hide");
//     })
// }
// Open/close sort and filter menu
const sortMenuOpenBtn = document.querySelector(".sort-filter");
const sortMenuCloseBtn = document.querySelector(".close-menu");
const sortMenuDiv = document.querySelector(".sort-filter-option");
const fadeDiv = document.querySelector(".sort-filter-option-container")
let body = document.body,
    html = document.documentElement;

let height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);
/* Open menu */
sortMenuOpenBtn.addEventListener("click", () => {
    sortMenuDiv.classList.remove("hide");
    document.body.style.opacity = ("0.35");
    fadeDiv.style.opacity = ("0.35");
    fadeDiv.style.height = height;

})
/* Close menu */
sortMenuCloseBtn.addEventListener("click", () => {
    sortMenuDiv.classList.add("hide");
    document.body.style.opacity = ("1");
})